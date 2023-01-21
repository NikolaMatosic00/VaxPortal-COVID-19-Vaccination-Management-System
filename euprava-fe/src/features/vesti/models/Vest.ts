export class Vest {
  naziv: string;
  sadrzaj: string;
  datumVremeObjavljivanja: string;

  constructor(naziv: string, sadrzaj: string, datumVremeObjavljivanja: string) {
    (this.naziv = naziv),
      (this.sadrzaj = sadrzaj),
      (this.datumVremeObjavljivanja = datumVremeObjavljivanja);
  }
}
