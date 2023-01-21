package com.matosic.euprava.models;

import javax.persistence.ColumnResult;
import javax.persistence.ConstructorResult;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedNativeQuery;
import javax.persistence.SqlResultSetMapping;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.matosic.euprava.dto.VakcinaPojedinacnaDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@SqlResultSetMapping(name = "MyResultMapping", classes = {
		  @ConstructorResult(targetClass = VakcinaPojedinacnaDTO.class,
				    columns = {
				      @ColumnResult(name = "ime", type = String.class),
				      @ColumnResult(name = "dostupnaKolicina", type = Integer.class),
				      @ColumnResult(name = "imeProizvodjaca", type = String.class),
				      @ColumnResult(name = "drzavaProizvodnje", type = String.class)
				    }
				  )
				})
@NamedNativeQuery(name = "Schedules",
query = "SELECT vakcina.ime, vakcina.dostupna_kolicina as dostupnaKolicina, proizvodjac_vakcine.ime as imeProizvodjaca, proizvodjac_vakcine.drzava as drzavaProizvodnje FROM vakcina INNER JOIN proizvodjac_vakcine ON vakcina.proizvodjac=proizvodjac_vakcine.id where vakcina.ime= :value",
resultSetMapping = "MyResultMapping")
public class Vakcina {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotNull
	@Size(min = 2, max = 70, message = "Ime Vakcine mora biti dugacko izmedju 2 i 70 slova")
	private String ime;

	@Min(value = 1)
	private int dostupnaKolicina;
	@ManyToOne
	@JoinColumn(name = "proizvodjac", referencedColumnName = "id", nullable = false)
	private ProizvodjacVakcine proizvodjac;
}
