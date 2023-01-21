package com.matosic.euprava.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.matosic.euprava.models.util.PrijavaZaVakcinu;

@Repository
public interface PrijavaZaVakcinuRepository extends JpaRepository<PrijavaZaVakcinu, Integer> {

	@Query(value = "SELECT * FROM prijava_za_vakcinu p WHERE pacijent in (Select id from korisnik where jmbg LIKE ?1% and prezime LIKE ?2%)", nativeQuery = true)
	public List<PrijavaZaVakcinu> svePrijavePoKriterijumima(String jmbg, String prezime);

	@Modifying
	@Transactional
	@Query(value = "DELETE FROM prijava_za_vakcinu WHERE pacijent = ?1", nativeQuery = true)
	public void obrisiSvePrijaveKorinsika(int id);
	
	@Modifying
	@Transactional
	@Query(value = "DELETE FROM prijava_za_vakcinu WHERE pacijent = ?1 and vakcina = ?2", nativeQuery = true)
	public void obrisiSvePrijaveKorinsikaZaDatuVakcinu(int id, int vakcina);
	
}
