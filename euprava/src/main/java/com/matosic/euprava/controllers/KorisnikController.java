package com.matosic.euprava.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matosic.euprava.advice.DefaultExceptionMoj;
import com.matosic.euprava.dto.ApiResponse;
import com.matosic.euprava.dto.KorisnikDTO;
import com.matosic.euprava.dto.LoginDTO;
import com.matosic.euprava.dto.RegistracijaDTO;
import com.matosic.euprava.services.KorisnikService;

@RestController
@RequestMapping("/korisnici")
@CrossOrigin("http://localhost:3000/")
public class KorisnikController {

	@Autowired
	private KorisnikService _korisnikService;

//	@GetMapping()
//	public  ResponseEntity<List<KorisnikDTO>> vratiSveKorisnike(){
//		return new ResponseEntity<List<KorisnikDTO>>(_korisnikService.vratiSve(), HttpStatus.OK);
//	}

	@PostMapping("/registracija")
	public ResponseEntity<ApiResponse<?>> registracija(@Valid @RequestBody RegistracijaDTO regDTO)
			throws DefaultExceptionMoj {

		_korisnikService.registracija(regDTO);

		ApiResponse<?> response = ApiResponse.builder().status("SUCCESS").build();

		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<ApiResponse<?>> login(@Valid @RequestBody LoginDTO loginDTO) throws DefaultExceptionMoj {
		KorisnikDTO kDTO = _korisnikService.login(loginDTO);

		ApiResponse<?> response = ApiResponse.builder().status("SUCCESS").results(kDTO).build();

		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	@PutMapping
	public ResponseEntity<ApiResponse<?>> izmena(@RequestBody KorisnikDTO korinsikDTO) throws DefaultExceptionMoj {
		KorisnikDTO kDTO = _korisnikService.izmeni(korinsikDTO);

		ApiResponse<?> response = ApiResponse.builder().status("SUCCESS").results(kDTO).build();

		return new ResponseEntity<>(response, HttpStatus.OK);
	}

}
