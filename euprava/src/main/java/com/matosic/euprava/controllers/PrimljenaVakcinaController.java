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

import com.matosic.euprava.dto.PrimljenaVakcinaDTO;
import com.matosic.euprava.services.PrimljenaVakcinaService;

@RestController
@RequestMapping("/primljenevakcine")
@CrossOrigin("http://localhost:3000/")
public class PrimljenaVakcinaController {

	@Autowired
	private PrimljenaVakcinaService _primljenaVakcinaService;

	@GetMapping
	public ResponseEntity<List<PrimljenaVakcinaDTO>> sveKorisnikoveVakcine(@RequestParam("jmbg") String jmbg) {
		return new ResponseEntity<List<PrimljenaVakcinaDTO>>(
				_primljenaVakcinaService.sveKorisnikovePrimljeneVakcine(jmbg), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Object> kreiraj(@RequestBody PrimljenaVakcinaDTO primljenaVakcinaDTO) {
		_primljenaVakcinaService.kreiraj(primljenaVakcinaDTO);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

}
