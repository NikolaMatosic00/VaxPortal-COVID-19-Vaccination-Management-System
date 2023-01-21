package com.matosic.euprava.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class ProizvodjacVakcine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotEmpty
	@Size(min = 2, max = 40, message = "Ime Proizvodjaca mora biti dugacko izmedju 2 i 70 slova")
	private String ime;

	@NotEmpty
	@Size(min = 2, max = 40, message = "Drzava mora biti dugacka izmedju 4 i 57 slova")
	private String drzava;

}
