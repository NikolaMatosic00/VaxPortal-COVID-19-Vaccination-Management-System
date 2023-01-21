package com.matosic.euprava.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.matosic.euprava.models.DnevniIzvestaj;

@Repository
public interface DnevniIzvestajRepository extends JpaRepository<DnevniIzvestaj, Integer> {

	@Query(value = "SELECT * FROM dnevni_izvestaj WHERE datum_vreme_objavljivanja = (SELECT MAX(datum_vreme_objavljivanja) FROM dnevni_izvestaj)", nativeQuery = true)
	public DnevniIzvestaj najskoriji();
	
	
	@Query(value = "SELECT SUM(broj_obolelihuposlednjem_danu) from dnevni_izvestaj", nativeQuery = true)
	public int brojObolelihOdPocetkaPandemije();
	
}
