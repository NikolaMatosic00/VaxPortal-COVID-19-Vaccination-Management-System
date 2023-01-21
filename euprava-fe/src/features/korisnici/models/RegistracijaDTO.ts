export class RegistracijaDTO {
  ime: string;
  prezime: string;
  datumRodjenja: string;
  jmbg: string;
  adresa: string;
  telefon: string;
  email: string;
  lozinka: string;

  constructor(
    ime: string,
    prezime: string,
    datumRodjenja: string,
    jmbg: string,
    adresa: string,
    telefon: string,
    email: string,
    lozinka: string
  ) {
    (this.ime = ime),
      (this.prezime = prezime),
      (this.datumRodjenja = datumRodjenja),
      (this.jmbg = jmbg),
      (this.adresa = adresa),
      (this.telefon = telefon),
      (this.email = email),
      (this.lozinka = lozinka);
  }
}
