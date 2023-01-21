package com.matosic.euprava.services;

import java.util.List;

import com.matosic.euprava.dto.PrimljenaVakcinaDTO;

public interface PrimljenaVakcinaService {

	public List<PrimljenaVakcinaDTO> sveKorisnikovePrimljeneVakcine(String jmbg);

	public void kreiraj(PrimljenaVakcinaDTO primljenaVakcinaDTO);
}
