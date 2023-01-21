package com.matosic.euprava.models;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class DnevniIzvestaj {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotNull
	private int brojObolelihUPoslednjemDanu;

	@NotNull
	private int brojTestiranihUPoslednjemDanu;

	@NotNull
	private int brojObolelihOdPocetkaPandemije;

	@NotNull
	private int brojHospitalizovanih;

	@NotNull
	private int brojNaRespiratorima;

	@Column(columnDefinition = "TIMESTAMP")
	private LocalDateTime datumVremeObjavljivanja;

}
