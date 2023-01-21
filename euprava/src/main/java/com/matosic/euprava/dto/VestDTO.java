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
public class VestDTO {

	private String naziv;

	private String sadrzaj;
	
	@Nullable
	private String datumVremeObjavljivanja;
}
