package com.matosic.euprava.services.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matosic.euprava.dao.KorisnikRepository;
import com.matosic.euprava.dao.PrijavaZaVakcinuRepository;
import com.matosic.euprava.dao.PrimljenaVakcinaRepository;
import com.matosic.euprava.dao.VakcinaRepository;
import com.matosic.euprava.dto.PrimljenaVakcinaDTO;
import com.matosic.euprava.models.Korisnik;
import com.matosic.euprava.models.util.PrimljenaVakcina;
import com.matosic.euprava.services.PrimljenaVakcinaService;

@Service
public class PrimljenaVakcinaServiceImplementation implements PrimljenaVakcinaService {

	@Autowired
	private PrimljenaVakcinaRepository _primljenaVakcinaRepository;
	@Autowired
	private KorisnikRepository _korisnikRepository;

	@Autowired
	private VakcinaRepository _vakcinaRepository;

	@Autowired
	private PrijavaZaVakcinuRepository _prijavaZaVakcinuRepository;
	
	@Override
	public List<PrimljenaVakcinaDTO> sveKorisnikovePrimljeneVakcine(String jmbg) {
		Korisnik korisnik = _korisnikRepository.findByJmbg(jmbg);
		List<PrimljenaVakcinaDTO> dtoList = new ArrayList<>();
		if(korisnik != null) {
		
		for (PrimljenaVakcina primljenaVakcina : _primljenaVakcinaRepository
				.sveKorisnikovePrimljeneVakcine(korisnik.getId())) {
			dtoList.add(this.EntityToDTO(primljenaVakcina));
		}
		}
		return dtoList;
	}

	@Override
	public void kreiraj(PrimljenaVakcinaDTO primljenaVakcinaDTO) {
		Korisnik korisnik = _korisnikRepository.findByJmbg(primljenaVakcinaDTO.getPacijentJMBG());
		_primljenaVakcinaRepository.save(PrimljenaVakcina.builder()
				.pacijent(korisnik)
				.vakcina(_vakcinaRepository.findByIme(primljenaVakcinaDTO.getVakcina()))
				.datumPrimanjaVakcine(LocalDateTime.now()).build());
		
		_vakcinaRepository.oduzmiJednu(primljenaVakcinaDTO.getVakcina());
		_prijavaZaVakcinuRepository.obrisiSvePrijaveKorinsika(korisnik.getId());
		
	}

	public PrimljenaVakcinaDTO EntityToDTO(PrimljenaVakcina primljenaVakcina) {
		return PrimljenaVakcinaDTO.builder().pacijentJMBG(primljenaVakcina.getPacijent().getJmbg())
				.vakcina(primljenaVakcina.getVakcina().getIme())
				.datumPrimanjaVakcine(primljenaVakcina.getDatumPrimanjaVakcine().toString()).build();
	}
}
