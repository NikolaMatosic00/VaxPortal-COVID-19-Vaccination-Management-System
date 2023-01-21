package com.matosic.euprava.models;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Entity
public class Korisnik {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotEmpty
	@Size(min = 2, max = 40, message = "Ime mora biti dugacko izmedju 2 i 40 slova")
	private String ime;

	@NotEmpty
	@Size(min = 2, max = 40, message = "Prezime mora biti dugacko izmedju 2 i 40 slova")
	private String prezime;

	@Column(columnDefinition = "DATE")
	private LocalDate datumRodjenja;

	@NotEmpty
	@Size(min = 13, max = 13, message = "JMBG mora imati 13 brojeva")
	private String jmbg;

	@NotEmpty
	@Size(min = 2, max = 40, message = "Adresa mora biti dugacka izmedju 4 i 120 slova")
	private String adresa;

	@NotEmpty
	@Size(min = 8, max = 17, message = "Telefon mora imati izmedju 8 i 17 brojeva")
	private String telefon;

	@NotEmpty
	@Size(min = 8, max = 100, message = "Email mora biti dugacak izmedju 8 i 100 karaktera")
	@Email(message = "Email mora biti ispravan")
	private String email;

	@NotEmpty
	@Size(min = 7, max = 200, message = "Lozinka mora biti dugacka izmadju 7 i 200 karaktera")
	private String lozinka;

	@Column(columnDefinition = "TIMESTAMP")
	private LocalDateTime datumVremeRegistracije;

	@NotEmpty
	private String uloga;
}
