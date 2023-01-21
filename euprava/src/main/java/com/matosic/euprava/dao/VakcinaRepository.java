package com.matosic.euprava.dao;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.matosic.euprava.models.Vakcina;


@Repository

public interface VakcinaRepository extends JpaRepository<Vakcina, Integer> {

	@Query(value = "SELECT * FROM vakcina WHERE ime = ?1 and proizvodjac = ?2", nativeQuery = true)
	public Vakcina pojedinacna(String naziv, int proizvodjacId);


	@Query(value = "SELECT * FROM vakcina v WHERE v.ime LIKE ?1% and v.proizvodjac IN ?2 and v.proizvodjac in (select id from proizvodjac_vakcine where drzava LIKE ?3%) and v.dostupna_kolicina > ?4 and v.dostupna_kolicina < ?5 ORDER BY dostupna_kolicina", nativeQuery = true)
	public List<Vakcina> sveVakcinePoKriterijumima(String naziv, List<Integer> idProizvodjaca, String drzava, int minKolicina,
			int maxKolicina, String sort);
	
	public Vakcina findByIme(String ime);
	
	@Query(value = "SELECT ime FROM vakcina", nativeQuery = true)
	public ArrayList<String> svaImena();

	@Query(value = "SELECT drzava FROM proizvodjac_vakcine where id in (select proizvodjac from vakcina)", nativeQuery = true)
	public ArrayList<String> sveDrzaveProizvodjaca();
	
	@Modifying
	@Transactional
	@Query(value = "UPDATE vakcina SET dostupna_kolicina = dostupna_kolicina - 1 where ime = ?1", nativeQuery = true)
	public void oduzmiJednu(String ime);
	
//	@Query(value = "SELECT vakcina.ime, vakcina.dostupna_kolicina as dostupnaKolicina, proizvodjac_vakcine.ime as imeProizvodjaca, proizvodjac_vakcine.drzava as drzavaProizvodjaca FROM vakcina INNER JOIN proizvodjac_vakcine ON vakcina.proizvodjac=proizvodjac_vakcine.id", nativeQuery = true)
//	public List<VakcinaPojedinacnaDTO> papsf();
//	
//	@Modifying
//	@Query("update vakcina set u.active = false where u.lastLoginDate < :date")
//	void deactivateUsersNotLoggedInSince(@Param("date") LocalDate date);
}
