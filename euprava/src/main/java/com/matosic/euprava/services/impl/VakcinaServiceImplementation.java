package com.matosic.euprava.services.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matosic.euprava.dao.ProizvodjacVakcineRepository;
import com.matosic.euprava.dao.VakcinaRepository;
import com.matosic.euprava.dto.VakcinaDTO;
import com.matosic.euprava.dto.VakcinaPojedinacnaDTO;
import com.matosic.euprava.models.Vakcina;
import com.matosic.euprava.services.VakcinaService;

@Service

public class VakcinaServiceImplementation implements VakcinaService {

	@Autowired
	private VakcinaRepository _vakcinaRepository;

	@Autowired
	private ProizvodjacVakcineRepository _proizvodjacVakcineRepository;

	@PersistenceContext
	private EntityManager em;

	@Override
	public void kreiraj(VakcinaDTO vakcinaDTO) {

		_vakcinaRepository
				.save(Vakcina.builder().ime(vakcinaDTO.getIme()).dostupnaKolicina(vakcinaDTO.getDostupnaKolicina())
						.proizvodjac(_proizvodjacVakcineRepository.findByIme(vakcinaDTO.getImeProizvodjaca())).build());

	}

	@Override
	public List<VakcinaDTO> sveVakcinePoKriterijumima(String naziv, String imeProizvodjaca, String drzava,
			int minKolicina, int maxKolicina, String sort) {

//		List<VakcinaPojedinacnaDTO> scheduleDays
//	    = Collections.checkedList(
//	      em.createNamedQuery("Schedules", VakcinaPojedinacnaDTO.class).getResultList(), VakcinaPojedinacnaDTO.class);

		List<Integer> idProizvodjaca = _proizvodjacVakcineRepository.nadjiIdjevePoImenu(imeProizvodjaca);

		List<VakcinaDTO> dtoLista = new ArrayList<>();
		for (Vakcina vakcina : _vakcinaRepository.sveVakcinePoKriterijumima(naziv, idProizvodjaca, drzava, minKolicina,
				maxKolicina, sort)) {
			dtoLista.add(this.EntityToDTO(vakcina));
		}
		return dtoLista;
	}

	@Override
	public VakcinaDTO pojedinacna(String naziv, String proizvodjacIme) {

		return this.EntityToDTO(
				_vakcinaRepository.pojedinacna(naziv, _proizvodjacVakcineRepository.nadjiIdPoImenu(proizvodjacIme)));

	}

	@Override
	public void izmeni(VakcinaDTO vakcinaDTO, String staroIme, String stariProizvodjac) {
		Vakcina v = _vakcinaRepository.pojedinacna(staroIme,
				_proizvodjacVakcineRepository.nadjiIdPoImenu(stariProizvodjac));
		v.setIme(vakcinaDTO.getIme());
		v.setProizvodjac(_proizvodjacVakcineRepository.findByIme(vakcinaDTO.getImeProizvodjaca()));
		v.setDostupnaKolicina(vakcinaDTO.getDostupnaKolicina());
		_vakcinaRepository.save(v);
	}

	public VakcinaDTO EntityToDTO(Vakcina vakcina) {
		return VakcinaDTO.builder().ime(vakcina.getIme()).dostupnaKolicina(vakcina.getDostupnaKolicina())
				.imeProizvodjaca(vakcina.getProizvodjac().getIme()).build();
	}

	@Override
	public VakcinaPojedinacnaDTO pojedinacnaZaPrikaz(String ime) {
		Query query = em.createNamedQuery("Schedules");
		query.setParameter("value", ime);
		VakcinaPojedinacnaDTO pojedinacnaZaPrikaz = (VakcinaPojedinacnaDTO) query.getSingleResult();

		return pojedinacnaZaPrikaz;
	}

	@Override
	public ArrayList<String> svaImenaVakcina() {

		return _vakcinaRepository.svaImena();
	}

	@Override
	public ArrayList<String> sveDrzaveProizvodjaca() {
		
		return _vakcinaRepository.sveDrzaveProizvodjaca();
	}

}
