package com.matosic.euprava.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.matosic.euprava.models.util.ZahtevZaNabavku;

@Repository
public interface ZahtevZaNabavkuRepository extends JpaRepository<ZahtevZaNabavku, Integer> {
	
	@Query(value="SELECT * FROM zahtev_za_nabavku WHERE vakcina in (select id from vakcina where ime = ?1) and status = 'NA_CEKANJU'", nativeQuery = true)
	public ZahtevZaNabavku nadjiPoImenuVakcineZahtevKojiJeNaCekanju(String imeVakcine);
	
	@Query(value="SELECT * FROM zahtev_za_nabavku WHERE vakcina in (select id from vakcina where ime = ?1) and status = 'VRACENA_NA_REVIZIJU'", nativeQuery = true)
	public ZahtevZaNabavku nadjiPoImenuVakcineZahtevKojiJeVracenNaReviziju(String imeVakcine);
}
