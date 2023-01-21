import axios from "axios";
import { Vakcina } from "./models/Vakcina";

const baseURL = "http://localhost:8081/vakcine";

export function kreiraj(ime: string, imeProizvodjaca: string) {
  return axios.post(baseURL, { ime, imeProizvodjaca });
}

export function sveVakcinePoKriterijumima(
  naziv: string = "",
  imeProizvodjaca: string = "",
  drzava: string = "",
  minKolicina: number = 0,
  maxKolicina: number = 100000000,
  sort: string = ""
) {
  return axios.get(
    baseURL +
      "?naziv=" +
      naziv +
      "&imeProizvodjaca=" +
      imeProizvodjaca +
      "&drzava=" +
      drzava +
      "&minKolicina=" +
      minKolicina +
      "&maxKolicina=" +
      maxKolicina +
      "&maxKolicina=" +
      maxKolicina +
      "&sort=" +
      sort
  );
}

export function izmenaVakcine(
  vakcina: Vakcina,
  staroIme: string,
  stariProizvodjac: string
) {
  return axios.put(
    baseURL + "?staroIme=" + staroIme + "&stariProizvodjac=" + stariProizvodjac,
    vakcina
  );
}

export function pojedinacnaZaPrikaz(ime: string) {
  return axios.get(baseURL + "/pojedinacna?ime=" + ime);
}

export function sveDrzaveProizvodjaca() {
  return axios.get("http://localhost:8081/vakcine/vratiSveDrzaveProizvodjaca");
}
