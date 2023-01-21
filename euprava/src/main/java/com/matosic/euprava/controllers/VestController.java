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
import org.springframework.web.bind.annotation.RestController;

import com.matosic.euprava.dto.VestDTO;
import com.matosic.euprava.services.VestService;

@RestController
@RequestMapping("/vesti")
@CrossOrigin("http://localhost:3000/")
public class VestController {

	@Autowired
	private VestService _vestService;

	@GetMapping
	public ResponseEntity<List<VestDTO>> sveVesti() {
		return new ResponseEntity<List<VestDTO>>(_vestService.sveVesti(), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Object> kreiraj(@RequestBody VestDTO vestDTO) {
		_vestService.kreiraj(vestDTO);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

}
