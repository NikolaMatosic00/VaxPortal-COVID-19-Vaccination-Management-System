package com.matosic.euprava.services;

import java.util.List;

import com.matosic.euprava.dto.ZahtevZaNabavkuDTO;

public interface ZahtevZaNabavkuService {

	public void kreiraj(ZahtevZaNabavkuDTO dto);

	public List<ZahtevZaNabavkuDTO> sviZahtevi();

	public void odobri(String imeVakcine, int kolicina);

	public void odbij(String imeVakcine, String porukaAdmina);

	public void vrati(String imeVakcine, String porukaAdmina);

	public void promeni(String imeVakcine, int kolicina);

}
