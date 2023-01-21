package com.matosic.euprava.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.matosic.euprava.models.ProizvodjacVakcine;

@Repository
public interface ProizvodjacVakcineRepository extends JpaRepository<ProizvodjacVakcine, Integer> {
	
	public ProizvodjacVakcine findByIme(String ime);
	
	
	@Query(value = "SELECT id FROM proizvodjac_vakcine WHERE ime LIKE ?1%", nativeQuery = true)
	public List<Integer> nadjiIdjevePoImenu(String ime);
	
	@Query(value = "SELECT id FROM proizvodjac_vakcine WHERE ime LIKE ?1%", nativeQuery = true)
	public int nadjiIdPoImenu(String ime);
}
