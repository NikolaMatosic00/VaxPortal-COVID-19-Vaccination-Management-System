package com.matosic.euprava.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.matosic.euprava.models.Korisnik;

@Repository
public interface KorisnikRepository extends JpaRepository<Korisnik, Integer> {
	
	
	@Query(value="SELECT * FROM korisnik WHERE email = ?1 and lozinka = ?2", nativeQuery = true)
	Korisnik nadjiPoEmailuILozinci(String email, String lozinka);
	
	public Korisnik findByJmbg(String jmbg);
}
