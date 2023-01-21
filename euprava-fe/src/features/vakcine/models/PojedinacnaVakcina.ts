export class PojedinacnaVakcina {
  ime: string;
  dostupnaKolicina: number;
  imeProizvodjaca: string;
  drzavaProizvodjaca: string;

  constructor(
    ime: string,
    dostupnaKolicina: number,
    imeProizvodjaca: string,
    drzavaProizvodjaca: string
  ) {
    (this.ime = ime),
      (this.dostupnaKolicina = dostupnaKolicina),
      (this.imeProizvodjaca = imeProizvodjaca);
    this.drzavaProizvodjaca = drzavaProizvodjaca;
  }
}
