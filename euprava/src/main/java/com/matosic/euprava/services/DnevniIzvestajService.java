package com.matosic.euprava.services;

import com.matosic.euprava.dto.DnevniIzvestajDTO;

public interface DnevniIzvestajService {

	public void kreiraj(DnevniIzvestajDTO dto);

	public DnevniIzvestajDTO poslednji();
}
