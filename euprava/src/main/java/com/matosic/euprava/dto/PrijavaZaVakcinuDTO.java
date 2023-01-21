package com.matosic.euprava.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PrijavaZaVakcinuDTO {
	
	private String prezime;

	private String pacijentJMBG;

	private String vakcina;

}
