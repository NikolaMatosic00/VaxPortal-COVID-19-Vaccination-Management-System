package com.matosic.euprava.models;

import java.time.LocalDateTime;

import javax.persistence.Column;
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
public class Vest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotEmpty(message = "Vest mora imati naziv")
	@Size(min = 2, max = 100, message = "Ime Vesti mora biti dugacko izmedju 2 i 100 slova")
	private String naziv;

	@NotEmpty
	@Size(min = 5, message = "Sadrzaj vesti mora biti duzi od 5 slova")
	private String sadrzaj;

	@Column(columnDefinition = "TIMESTAMP")
	private LocalDateTime datumVremeObjavljivanja;
}
