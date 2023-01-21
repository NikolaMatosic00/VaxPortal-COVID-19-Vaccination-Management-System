export class VestDTO {
  naziv: string;
  sadrzaj: string;

  constructor(naziv: string, sadrzaj: string) {
    (this.naziv = naziv), (this.sadrzaj = sadrzaj);
  }
}
