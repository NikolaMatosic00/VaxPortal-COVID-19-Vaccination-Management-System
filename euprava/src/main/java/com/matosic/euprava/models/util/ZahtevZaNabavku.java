package com.matosic.euprava.models.util;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;

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
public class ZahtevZaNabavku {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "vakcina", referencedColumnName = "id", nullable = false)
	private Vakcina vakcina;

	@Min(value = 1, message = "Kolicina za nabavku mora biti veca od 1")
	private int kolicina;

	@NotEmpty
	private String razlog;

	private String porukaAdministratora;

	@Enumerated(EnumType.STRING)
	private StatusNabavke status;

}
