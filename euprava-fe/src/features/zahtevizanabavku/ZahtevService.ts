import axios from "axios";
import { Zahtev } from "./models/Zahtev";

const baseURL = "http://localhost:8081/zahtevizanabavku/";

export function sviZahtevi() {
  return axios.get(baseURL);
}

export function kreiraj(zahtev: Zahtev) {
  return axios.post(baseURL, zahtev);
}

export function svaImenaVakcina() {
  return axios.get("http://localhost:8081/vakcine/vratiSvaImenaVakcina");
}

export function odobri(vakcina: string, kolicina: number) {
  return axios.post(
    baseURL + "odobri" + "?imeVakcine=" + vakcina + "&kolicina=" + kolicina
  );
}

export function odbij(vakcina: string, porukaAdmina: string) {
  return axios.post(
    baseURL +
      "odbij" +
      "?imeVakcine=" +
      vakcina +
      "&porukaAdmina=" +
      porukaAdmina
  );
}

export function vrati(vakcina: string, porukaAdmina: string) {
  return axios.post(
    baseURL +
      "vrati" +
      "?imeVakcine=" +
      vakcina +
      "&porukaAdmina=" +
      porukaAdmina
  );
}

export function promeni(vakcina: string, kolicina: number) {
  return axios.post(
    baseURL + "promeni" + "?imeVakcine=" + vakcina + "&kolicina=" + kolicina
  );
}
