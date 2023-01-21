package com.matosic.euprava.services.impl;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matosic.euprava.advice.DefaultExceptionMoj;
import com.matosic.euprava.dao.KorisnikRepository;
import com.matosic.euprava.dto.KorisnikDTO;
import com.matosic.euprava.dto.LoginDTO;
import com.matosic.euprava.dto.RegistracijaDTO;
import com.matosic.euprava.models.Korisnik;
import com.matosic.euprava.services.KorisnikService;

@Service
public class KorisnikServiceImplementation implements KorisnikService {

	@Autowired
	private KorisnikRepository _korisnikRepo;

	public void registracija(RegistracijaDTO dto) throws DefaultExceptionMoj {
		try {
			_korisnikRepo.save(Korisnik.builder().ime(dto.getIme()).prezime(dto.getPrezime())
					.datumRodjenja(LocalDate.parse(dto.getDatumRodjenja())).jmbg(dto.getJmbg()).adresa(dto.getAdresa())
					.telefon(dto.getTelefon()).email(dto.getEmail()).lozinka(dto.getLozinka())
					.datumVremeRegistracije(LocalDateTime.now()).uloga("PACIJENT").build());
		} catch (Exception e) {
			throw new DefaultExceptionMoj("Greska prilikom upisa novaog korisnika u bazu");
		}
	}

	@Override
	public KorisnikDTO login(LoginDTO loginDTO) throws DefaultExceptionMoj {
		KorisnikDTO kdto;
		try {
			Korisnik korisnik = _korisnikRepo.nadjiPoEmailuILozinci(loginDTO.getEmail(), loginDTO.getLozinka());
			kdto = this.EntityToDTO(korisnik);
		} catch (Exception e) {
			throw new DefaultExceptionMoj("Greska prilikom ucitavanja korisnika po emailu i lozinci");
		}

		return kdto;
	}

	@Override
	public KorisnikDTO izmeni(KorisnikDTO korisnikDTO) throws DefaultExceptionMoj {
		KorisnikDTO kdto;
		try {
			Korisnik korisnik = _korisnikRepo.findByJmbg(korisnikDTO.getJmbg());
			korisnik.setIme(korisnikDTO.getIme());
			korisnik.setPrezime(korisnikDTO.getPrezime());
			korisnik.setAdresa(korisnikDTO.getAdresa());
			korisnik.setTelefon(korisnikDTO.getTelefon());
			korisnik.setEmail(korisnikDTO.getEmail());
			korisnik.setLozinka(korisnikDTO.getLozinka());
			_korisnikRepo.save(korisnik);
			kdto = this.EntityToDTO(korisnik);

		} catch (Exception e) {
			throw new DefaultExceptionMoj("Greska prilikom ucitavanja korisnika po emailu i lozinci");
		}
		return kdto;
	}

	public KorisnikDTO EntityToDTO(Korisnik korisnik) {
		return KorisnikDTO.builder().ime(korisnik.getIme()).prezime(korisnik.getPrezime())
				.datumRodjenja(korisnik.getDatumRodjenja().toString()).jmbg(korisnik.getJmbg())
				.adresa(korisnik.getAdresa()).telefon(korisnik.getTelefon()).email(korisnik.getEmail())
				.lozinka(korisnik.getLozinka()).datumVremeRegistracije(korisnik.getDatumVremeRegistracije().toString())
				.uloga(korisnik.getUloga()).build();
	}

}
