package com.matosic.euprava.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegistracijaDTO {

	@NotEmpty
	@Size(min = 2, max = 40, message = "Ime mora biti dugacko izmedju 2 i 40 slova")
	private String ime;
	@NotEmpty
	@Size(min = 2, max = 40, message = "Prezime mora biti dugacko izmedju 2 i 40 slova")
	private String prezime;

	private String datumRodjenja;
	@NotEmpty
	@Size(min = 13, max = 13, message = "JMBG mora imati 13 brojeva")
	private String jmbg;

	private String adresa;

	private String telefon;
	@NotEmpty
	@Size(min = 8, max = 100, message = "Email mora biti dugacak izmedju 8 i 100 karaktera")
	@Email(message = "Email mora biti ispravan")
	private String email;
	@NotEmpty
	@Size(min = 7, max = 200, message = "Lozinka mora biti dugacka izmadju 7 i 200 karaktera")
	private String lozinka;
}
