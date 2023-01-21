package com.matosic.euprava.services;

import java.util.List;

import com.matosic.euprava.dto.VestDTO;

public interface VestService {

	public void kreiraj(VestDTO vestDTO);

	public List<VestDTO> sveVesti();
}
