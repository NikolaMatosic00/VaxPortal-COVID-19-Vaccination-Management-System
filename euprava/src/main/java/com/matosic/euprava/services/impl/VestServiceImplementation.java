package com.matosic.euprava.services.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matosic.euprava.dao.VestRepository;
import com.matosic.euprava.dto.VestDTO;
import com.matosic.euprava.models.Vest;
import com.matosic.euprava.services.VestService;

@Service
public class VestServiceImplementation implements VestService {

	@Autowired
	private VestRepository _vestRepository;

	@Override
	public void kreiraj(VestDTO dto) {
		_vestRepository.save(Vest.builder().naziv(dto.getNaziv()).sadrzaj(dto.getSadrzaj())
				.datumVremeObjavljivanja(LocalDateTime.now()).build());

	}

	@Override
	public List<VestDTO> sveVesti() {
		List<VestDTO> dtoLista = new ArrayList<>();
		for (Vest vest : _vestRepository.findAllByOrderByDatumVremeObjavljivanjaDesc()) {
			dtoLista.add(this.EntityToDTO(vest));
		}
		return dtoLista;
	}

	public VestDTO EntityToDTO(Vest vest) {
		return VestDTO.builder().naziv(vest.getNaziv()).sadrzaj(vest.getSadrzaj())
				.datumVremeObjavljivanja(vest.getDatumVremeObjavljivanja().toString()).build();
	}
	
}
