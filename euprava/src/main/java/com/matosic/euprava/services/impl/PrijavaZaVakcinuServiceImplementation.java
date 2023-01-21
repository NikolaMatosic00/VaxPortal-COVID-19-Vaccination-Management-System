package com.matosic.euprava.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matosic.euprava.dao.KorisnikRepository;
import com.matosic.euprava.dao.PrijavaZaVakcinuRepository;
import com.matosic.euprava.dao.VakcinaRepository;
import com.matosic.euprava.dto.PrijavaZaVakcinuDTO;
import com.matosic.euprava.models.Korisnik;
import com.matosic.euprava.models.util.PrijavaZaVakcinu;
import com.matosic.euprava.services.PrijavaZaVakcinuService;

@Service
public class PrijavaZaVakcinuServiceImplementation implements PrijavaZaVakcinuService {

	@Autowired
	private PrijavaZaVakcinuRepository _prijavaZaVakcinuRepository;

	@Autowired
	private KorisnikRepository _korisnikRepository;

	@Autowired
	private VakcinaRepository _vakcinaRepository;

	@Override
	public void kreiraj(PrijavaZaVakcinuDTO dto) {
		_prijavaZaVakcinuRepository
				.save(PrijavaZaVakcinu.builder().pacijent(_korisnikRepository.findByJmbg(dto.getPacijentJMBG()))
						.vakcina(_vakcinaRepository.findByIme(dto.getVakcina())).build());
	}

	@Override
	public void otkazi(PrijavaZaVakcinuDTO dto) {
		Korisnik korisnik = _korisnikRepository.findByJmbg(dto.getPacijentJMBG());
		
		_prijavaZaVakcinuRepository.obrisiSvePrijaveKorinsikaZaDatuVakcinu(korisnik.getId(), _vakcinaRepository.findByIme(dto.getVakcina()).getId());
		
	}

	@Override
	public List<PrijavaZaVakcinuDTO> svePrijavePoKriterijumima(String jmbg, String prezime) {
		List<PrijavaZaVakcinuDTO> dtoList = new ArrayList<>();
		for(PrijavaZaVakcinu prijavaZaVakcinu : _prijavaZaVakcinuRepository.svePrijavePoKriterijumima(jmbg, prezime)) {
			dtoList.add(this.EntityToDTO(prijavaZaVakcinu));
		}
		return dtoList;
	}

	public PrijavaZaVakcinuDTO EntityToDTO(PrijavaZaVakcinu prijavaZaVakcinu) {
		return PrijavaZaVakcinuDTO.builder().vakcina(prijavaZaVakcinu.getVakcina().getIme())
				.pacijentJMBG(prijavaZaVakcinu.getPacijent().getJmbg()).prezime(prijavaZaVakcinu.getPacijent().getPrezime()).build();
	}


}
