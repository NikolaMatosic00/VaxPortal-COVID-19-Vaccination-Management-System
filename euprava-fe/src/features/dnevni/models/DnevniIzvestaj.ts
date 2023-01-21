export class DnevniIzvestaj {
  brojObolelihUPoslednjemDanu: number;
  brojTestiranihUPoslednjemDanu: number;
  brojObolelihOdPocetkaPandemije: number;
  brojHospitalizovanih: number;
  brojNaRespiratorima: number;
  datumVremeObjavljivanja: string;

  constructor(
    brojObolelihUPoslednjemDanu: number,
    brojTestiranihUPoslednjemDanu: number,
    brojObolelihOdPocetkaPandemije: number,
    brojHospitalizovanih: number,
    brojNaRespiratorima: number,
    datumVremeObjavljivanja: string
  ) {
    (this.brojObolelihUPoslednjemDanu = brojObolelihUPoslednjemDanu),
      (this.brojTestiranihUPoslednjemDanu = brojTestiranihUPoslednjemDanu),
      (this.brojObolelihOdPocetkaPandemije = brojObolelihOdPocetkaPandemije),
      (this.brojHospitalizovanih = brojHospitalizovanih),
      (this.brojNaRespiratorima = brojNaRespiratorima),
      (this.datumVremeObjavljivanja = datumVremeObjavljivanja);
  }
}
