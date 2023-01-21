export class Prijava {
  prezime?: string;
  pacijentJMBG: string;
  vakcina: string;

  constructor(prezime: string, pacijentJMBG: string, vakcina: string) {
    (this.prezime = prezime),
      (this.pacijentJMBG = pacijentJMBG),
      (this.vakcina = vakcina);
  }
}
