package com.matosic.euprava.services;

import java.util.ArrayList;
import java.util.List;

import com.matosic.euprava.dto.VakcinaDTO;
import com.matosic.euprava.dto.VakcinaPojedinacnaDTO;

public interface VakcinaService {

	public void kreiraj(VakcinaDTO vakcinaDTO);

	public List<VakcinaDTO> sveVakcinePoKriterijumima(String naziv, String imeProizvodjaca, String drzava, int minKolicina, int maxKolicina, String sort);
	
	public VakcinaDTO pojedinacna(String naziv, String proizvodjacIme);
	
	public void izmeni(VakcinaDTO vakcinaDTO, String staroIme, String stariProizvodjac);
	
	public VakcinaPojedinacnaDTO pojedinacnaZaPrikaz(String ime);

	public ArrayList<String> svaImenaVakcina();

	public ArrayList<String> sveDrzaveProizvodjaca();
}
