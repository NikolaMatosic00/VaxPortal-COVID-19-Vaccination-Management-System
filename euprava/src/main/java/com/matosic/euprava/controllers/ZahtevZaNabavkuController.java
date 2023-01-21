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

import com.matosic.euprava.dto.ZahtevZaNabavkuDTO;
import com.matosic.euprava.services.ZahtevZaNabavkuService;

@RestController
@RequestMapping("/zahtevizanabavku")
@CrossOrigin("http://localhost:3000/")
public class ZahtevZaNabavkuController {

	@Autowired
	private ZahtevZaNabavkuService _zahtevZaNabavkuService;

	@GetMapping
	public ResponseEntity<List<ZahtevZaNabavkuDTO>> sveVesti() {
		return new ResponseEntity<List<ZahtevZaNabavkuDTO>>(_zahtevZaNabavkuService.sviZahtevi(), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Object> kreiraj(@RequestBody ZahtevZaNabavkuDTO dto) {
		_zahtevZaNabavkuService.kreiraj(dto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
//ODOBRI/ODBIJ PO IMENU?
	@PostMapping("/odobri")
	public ResponseEntity<Object> odobri(@RequestParam(name = "imeVakcine") String imeVakcine,
			@RequestParam(name = "kolicina") int kolicina) {

		_zahtevZaNabavkuService.odobri(imeVakcine, kolicina);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@PostMapping("/odbij")
	public ResponseEntity<Object> odbij(@RequestParam(name = "imeVakcine") String imeVakcine, @RequestParam(name = "porukaAdmina") String porukaAdmina) {

		_zahtevZaNabavkuService.odbij(imeVakcine, porukaAdmina);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	
	@PostMapping("/vrati")
	public ResponseEntity<Object> vrati(@RequestParam(name = "imeVakcine") String imeVakcine, @RequestParam(name = "porukaAdmina") String porukaAdmina) {

		_zahtevZaNabavkuService.vrati(imeVakcine, porukaAdmina);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@PostMapping("/promeni")
	public ResponseEntity<Object> promeni(@RequestParam(name = "imeVakcine") String imeVakcine, @RequestParam(name = "kolicina") int kolicina) {
		
		_zahtevZaNabavkuService.promeni(imeVakcine, kolicina);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
}
