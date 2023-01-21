package com.matosic.euprava.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.matosic.euprava.models.util.PrimljenaVakcina;

@Repository
public interface PrimljenaVakcinaRepository extends JpaRepository<PrimljenaVakcina, Integer> {

	@Query(value = "SELECT * FROM primljena_vakcina WHERE pacijent = ?1", nativeQuery = true)
	List<PrimljenaVakcina> sveKorisnikovePrimljeneVakcine(int id);
}
