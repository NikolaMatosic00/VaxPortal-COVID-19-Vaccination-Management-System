package com.matosic.euprava.services.impl;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matosic.euprava.dao.DnevniIzvestajRepository;
import com.matosic.euprava.dto.DnevniIzvestajDTO;
import com.matosic.euprava.models.DnevniIzvestaj;
import com.matosic.euprava.services.DnevniIzvestajService;

@Service
public class DnevniIzvestajServiceImplementation implements DnevniIzvestajService {

	@Autowired
	private DnevniIzvestajRepository _dnevniIzvestajRepo;

	@Override
	public void kreiraj(DnevniIzvestajDTO dto) {
		int ukupnoObolelih = _dnevniIzvestajRepo.brojObolelihOdPocetkaPandemije();
		_dnevniIzvestajRepo.save(DnevniIzvestaj.builder()
				.brojObolelihUPoslednjemDanu(dto.getBrojObolelihUPoslednjemDanu())
				.brojTestiranihUPoslednjemDanu(dto.getBrojTestiranihUPoslednjemDanu())
				.brojObolelihOdPocetkaPandemije(ukupnoObolelih + dto.getBrojObolelihUPoslednjemDanu())
				.brojHospitalizovanih(dto.getBrojHospitalizovanih()).brojNaRespiratorima(dto.getBrojNaRespiratorima())
				.datumVremeObjavljivanja(LocalDateTime.now()).build());

	}

	@Override
	public DnevniIzvestajDTO poslednji() {
		DnevniIzvestaj dnevniIzvestaj = _dnevniIzvestajRepo.najskoriji();
		DnevniIzvestajDTO dto = this.EntityToDTO(dnevniIzvestaj);
		return dto;
	}

	public DnevniIzvestajDTO EntityToDTO(DnevniIzvestaj dnevniIzvestaj) {
		int ukupnoObolelih = _dnevniIzvestajRepo.brojObolelihOdPocetkaPandemije();

		return DnevniIzvestajDTO.builder().brojObolelihUPoslednjemDanu(dnevniIzvestaj.getBrojObolelihUPoslednjemDanu())
				.brojTestiranihUPoslednjemDanu(dnevniIzvestaj.getBrojTestiranihUPoslednjemDanu())
				.brojObolelihOdPocetkaPandemije(ukupnoObolelih)
				.brojHospitalizovanih(dnevniIzvestaj.getBrojHospitalizovanih())
				.brojNaRespiratorima(dnevniIzvestaj.getBrojNaRespiratorima())
				.datumVremeObjavljivanja(dnevniIzvestaj.getDatumVremeObjavljivanja().toString()).build();
	}

}
