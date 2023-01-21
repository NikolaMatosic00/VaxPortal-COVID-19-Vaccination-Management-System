package com.matosic.euprava.models.util;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.matosic.euprava.models.Korisnik;
import com.matosic.euprava.models.Vakcina;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class PrijavaZaVakcinu {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "pacijent", referencedColumnName = "id", nullable = false)
	private Korisnik pacijent;

	@ManyToOne
	@JoinColumn(name = "vakcina", referencedColumnName = "id", nullable = false)
	private Vakcina vakcina;

}
