package com.matosic.euprava.services;

import com.matosic.euprava.advice.DefaultExceptionMoj;
import com.matosic.euprava.dto.KorisnikDTO;
import com.matosic.euprava.dto.LoginDTO;
import com.matosic.euprava.dto.RegistracijaDTO;

public interface KorisnikService {

	public void registracija(RegistracijaDTO regDTO) throws DefaultExceptionMoj;

	public KorisnikDTO login(LoginDTO loginDTO) throws DefaultExceptionMoj;
	
	public KorisnikDTO izmeni(KorisnikDTO korisnikDTO) throws DefaultExceptionMoj;

}
