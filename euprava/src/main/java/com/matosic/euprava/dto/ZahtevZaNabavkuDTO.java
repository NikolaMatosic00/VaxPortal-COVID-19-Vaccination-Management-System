package com.matosic.euprava.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ZahtevZaNabavkuDTO {

	@NotEmpty
	private String vakcina;

	@Min(value = 1, message = "Kolicina za nabavku mora biti veca od 1")
	private int kolicina;

	@NotEmpty
	private String razlog;

	private String porukaAdministratora;

	private String status;

}
