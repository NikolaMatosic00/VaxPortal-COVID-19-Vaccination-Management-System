package com.matosic.euprava.dto;

import org.springframework.lang.Nullable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VakcinaDTO {

	private String ime;

	@Nullable
	private int dostupnaKolicina;

	private String imeProizvodjaca;

}
