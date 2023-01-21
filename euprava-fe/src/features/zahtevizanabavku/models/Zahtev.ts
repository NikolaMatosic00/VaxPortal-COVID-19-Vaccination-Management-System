export class Zahtev {
  vakcina: string;
  kolicina: number;
  razlog: string;
  porukaAdministratora?: string;
  status?: string;

  constructor(
    vakcina: string,
    kolicina: number,
    razlog: string,
    porukaAdministratora?: string,
    status?: string
  ) {
    (this.vakcina = vakcina),
      (this.kolicina = kolicina),
      (this.razlog = razlog),
      (this.porukaAdministratora = porukaAdministratora),
      (this.status = status);
  }
}
