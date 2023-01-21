package com.matosic.euprava.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matosic.euprava.dto.DnevniIzvestajDTO;
import com.matosic.euprava.services.DnevniIzvestajService;

@RestController
@RequestMapping("/dnevni")
@CrossOrigin("http://localhost:3000/")
public class DnevniIzvestajController {
	
	@Autowired
	private DnevniIzvestajService _dnevniIzvestajService;

	@GetMapping()
	public  ResponseEntity<DnevniIzvestajDTO> poslednji(){
		return new ResponseEntity<DnevniIzvestajDTO>(_dnevniIzvestajService.poslednji(), HttpStatus.OK);
	}

	@PostMapping()
	public ResponseEntity<Object> kreiraj(@RequestBody DnevniIzvestajDTO dto) {
		_dnevniIzvestajService.kreiraj(dto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}


}
