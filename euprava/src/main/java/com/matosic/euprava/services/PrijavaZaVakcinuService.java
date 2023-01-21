package com.matosic.euprava.services;

import java.util.List;

import com.matosic.euprava.dto.PrijavaZaVakcinuDTO;

public interface PrijavaZaVakcinuService {

	public void kreiraj(PrijavaZaVakcinuDTO dto);
	
	public void otkazi(PrijavaZaVakcinuDTO dto);

	public List<PrijavaZaVakcinuDTO> svePrijavePoKriterijumima(String jmbg, String prezime);

}
