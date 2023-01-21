package com.matosic.euprava.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.matosic.euprava.dto.PrijavaZaVakcinuDTO;
import com.matosic.euprava.services.PrijavaZaVakcinuService;

@RestController
@RequestMapping("/prijavazavakcinu")
@CrossOrigin("http://localhost:3000/")
public class PrijavaZaVakcinuController {

	@Autowired
	private PrijavaZaVakcinuService _prijavaZaVakcinuService;

	@GetMapping
	public ResponseEntity<List<PrijavaZaVakcinuDTO>> svePrijavePoKriterijumima(
			@RequestParam(name = "jmbg", defaultValue = "") String jmbg,
			@RequestParam(name = "prezime", defaultValue = "") String prezime) {
		return new ResponseEntity<List<PrijavaZaVakcinuDTO>>(
				_prijavaZaVakcinuService.svePrijavePoKriterijumima(jmbg, prezime), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Object> kreiraj(@RequestBody PrijavaZaVakcinuDTO prijavaZaVakcinuDTO) {
		_prijavaZaVakcinuService.kreiraj(prijavaZaVakcinuDTO);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@PostMapping("/otkazi")
	public ResponseEntity<Object> otkazi(@RequestBody PrijavaZaVakcinuDTO prijavaZaVakcinuDTO) {
		_prijavaZaVakcinuService.otkazi(prijavaZaVakcinuDTO);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

}
