package com.matosic.euprava.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matosic.euprava.dao.VakcinaRepository;
import com.matosic.euprava.dao.ZahtevZaNabavkuRepository;
import com.matosic.euprava.dto.ZahtevZaNabavkuDTO;
import com.matosic.euprava.models.Vakcina;
import com.matosic.euprava.models.util.StatusNabavke;
import com.matosic.euprava.models.util.ZahtevZaNabavku;
import com.matosic.euprava.services.ZahtevZaNabavkuService;

@Service
public class ZahtevZaNabavkuServiceImplementation implements ZahtevZaNabavkuService {

	@Autowired
	private ZahtevZaNabavkuRepository _zahtevZaNabavkuRepository;

	@Autowired
	private VakcinaRepository _vakcinaRepository;

	@Override
	public void kreiraj(ZahtevZaNabavkuDTO dto) {
		if (_zahtevZaNabavkuRepository.nadjiPoImenuVakcineZahtevKojiJeNaCekanju(dto.getVakcina()) == null) {

			_zahtevZaNabavkuRepository.save(ZahtevZaNabavku.builder()
					.vakcina(_vakcinaRepository.findByIme(dto.getVakcina())).kolicina(dto.getKolicina())
					.razlog(dto.getRazlog()).porukaAdministratora("").status(StatusNabavke.NA_CEKANJU).build());
		}
	}

	@Override
	public List<ZahtevZaNabavkuDTO> sviZahtevi() {
		List<ZahtevZaNabavkuDTO> dtoLista = new ArrayList<>();
		for (ZahtevZaNabavku z : _zahtevZaNabavkuRepository.findAll()) {
			dtoLista.add(this.EntityToDTO(z));
		}
		return dtoLista;
	}

	public ZahtevZaNabavkuDTO EntityToDTO(ZahtevZaNabavku zahtevZaNabavku) {
		return ZahtevZaNabavkuDTO.builder().vakcina(zahtevZaNabavku.getVakcina().getIme())
				.kolicina(zahtevZaNabavku.getKolicina()).razlog(zahtevZaNabavku.getRazlog())
				.porukaAdministratora(zahtevZaNabavku.getPorukaAdministratora())
				.status(zahtevZaNabavku.getStatus().toString()).build();
	}

	@Override
	public void odobri(String imeVakcine, int kolicina) {
		ZahtevZaNabavku zahtev = _zahtevZaNabavkuRepository.nadjiPoImenuVakcineZahtevKojiJeNaCekanju(imeVakcine);
		Vakcina vakcina = _vakcinaRepository.findByIme(imeVakcine);
		
		zahtev.setStatus(StatusNabavke.ODOBRENA);
		vakcina.setDostupnaKolicina(vakcina.getDostupnaKolicina() + kolicina);

		_vakcinaRepository.save(vakcina);
		_zahtevZaNabavkuRepository.save(zahtev);
	}

	@Override
	public void odbij(String imeVakcine, String PorukaAdmina) {
		ZahtevZaNabavku zahtev = _zahtevZaNabavkuRepository.nadjiPoImenuVakcineZahtevKojiJeNaCekanju(imeVakcine);
		zahtev.setPorukaAdministratora(PorukaAdmina);
		zahtev.setStatus(StatusNabavke.ODBIJENA);
		_zahtevZaNabavkuRepository.save(zahtev);
	}
	
	@Override
	public void vrati(String imeVakcine, String PorukaAdmina) {
		ZahtevZaNabavku zahtev = _zahtevZaNabavkuRepository.nadjiPoImenuVakcineZahtevKojiJeNaCekanju(imeVakcine);
		zahtev.setPorukaAdministratora(PorukaAdmina);
		zahtev.setStatus(StatusNabavke.VRACENA_NA_REVIZIJU);
		_zahtevZaNabavkuRepository.save(zahtev);
	}
	
	@Override
	public void promeni(String imeVakcine, int kolicina) {
		ZahtevZaNabavku zahtev = _zahtevZaNabavkuRepository.nadjiPoImenuVakcineZahtevKojiJeVracenNaReviziju(imeVakcine);
		zahtev.setKolicina(kolicina);
		zahtev.setStatus(StatusNabavke.NA_CEKANJU);
		_zahtevZaNabavkuRepository.save(zahtev);
	}

}
