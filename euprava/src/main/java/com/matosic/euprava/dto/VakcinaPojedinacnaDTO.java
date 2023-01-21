package com.matosic.euprava.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class VakcinaPojedinacnaDTO {
	private String ime;
	private int dostupnaKolicina;
	private String imeProizvodjaca;
	private String drzavaProizvodjaca;
}
