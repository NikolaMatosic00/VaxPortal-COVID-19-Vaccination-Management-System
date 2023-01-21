package com.matosic.euprava.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.matosic.euprava.dto.VakcinaDTO;
import com.matosic.euprava.services.VakcinaService;

@RestController
@RequestMapping("/vakcine")
@CrossOrigin("http://localhost:3000/")
public class VakcinaController {

	@Autowired
	private VakcinaService _vakcinaService;

	@GetMapping
	public ResponseEntity<List<VakcinaDTO>> sveVakcinePoKriterijumima(
			@RequestParam(name = "naziv", defaultValue = "") String naziv,
			@RequestParam(name = "imeProizvodjaca", defaultValue = "") String imeProizvodjaca,
			@RequestParam(name = "drzava", defaultValue = "") String drzava,
			@RequestParam(name = "minKolicina", defaultValue = "0") int minKolicina,
			@RequestParam(name = "maxKolicina", defaultValue = "1000000000") int maxKolicina,
			@RequestParam(name = "sort", defaultValue = "dostupna_kolicina") String sort) {

		return new ResponseEntity<List<VakcinaDTO>>(_vakcinaService.sveVakcinePoKriterijumima(naziv, imeProizvodjaca,
				drzava, minKolicina, maxKolicina, sort), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Object> kreiraj(@RequestBody VakcinaDTO vakcinaDTO) {
		_vakcinaService.kreiraj(vakcinaDTO);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	// KOMPROMIS -- JER NE SALJEM ID NA FRONT SLACE SE STARI PODACI KAO QUERYPARAM O
	// POJEDINACNOJ VAKCINI KOJA SE MOZDA MENJA
	@PutMapping
	public ResponseEntity<?> izmeni(@RequestBody VakcinaDTO vakcinaDTO, @RequestParam("staroIme") String staroIme,
			@RequestParam("stariProizvodjac") String stariProizvodjac) {
		_vakcinaService.izmeni(vakcinaDTO, staroIme, stariProizvodjac);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@GetMapping("/pojedinacna")
	public ResponseEntity<?> pojedinacna(@RequestParam(name = "ime") String ime) {
		return new ResponseEntity<>(_vakcinaService.pojedinacnaZaPrikaz(ime), HttpStatus.OK);
	}
	
	@GetMapping("/vratiSvaImenaVakcina")
	public ResponseEntity<List<String>> svaImenaVakcina() {
		return new ResponseEntity<>(_vakcinaService.svaImenaVakcina(), HttpStatus.OK);
	}
	
	
	@GetMapping("/vratiSveDrzaveProizvodjaca")
	public ResponseEntity<List<String>> sveDrzaveProizvodjaca() {
		return new ResponseEntity<>(_vakcinaService.sveDrzaveProizvodjaca(), HttpStatus.OK);
	}
	
}
