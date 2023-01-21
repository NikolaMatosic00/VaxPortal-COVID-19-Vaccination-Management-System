package com.matosic.euprava.dto;

import javax.validation.constraints.Email;
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
public class LoginDTO {
	@NotEmpty
	@Size(min = 8, max = 100, message = "Email mora biti dugacak izmedju 8 i 100 karaktera")
	@Email(message = "Email mora biti ispravan")
	private String email;
	@NotEmpty
	@Size(min = 7, message = "Lozinka mora biti dugacka 8 karaktera")
	private String lozinka;

}
