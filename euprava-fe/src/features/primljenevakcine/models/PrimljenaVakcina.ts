export class PrimljenaVakcina {
  pacijentJMBG: string;
  vakcina: string;
  datumPrimanjaVakcine?: string;

  constructor(
    pacijentJMBG: string,
    vakcina: string,
    datumPrimanjaVakcine: string
  ) {
    (this.pacijentJMBG = pacijentJMBG),
      (this.vakcina = vakcina),
      (this.datumPrimanjaVakcine = datumPrimanjaVakcine);
  }
}
