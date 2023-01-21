package com.matosic.euprava.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class KorisnikDTO {

	private String ime;

	private String prezime;

	private String datumRodjenja;

	private String jmbg;

	private String adresa;

	private String telefon;

	private String email;

	private String lozinka;

	private String datumVremeRegistracije;

	private String uloga;

}
