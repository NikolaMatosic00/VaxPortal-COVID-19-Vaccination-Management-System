export class Vakcina {
  ime: string;
  dostupnaKolicina: number;
  imeProizvodjaca: string;

  constructor(ime: string, dostupnaKolicina: number, imeProizvodjaca: string) {
    (this.ime = ime),
      (this.dostupnaKolicina = dostupnaKolicina),
      (this.imeProizvodjaca = imeProizvodjaca);
  }
}
