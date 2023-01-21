import axios from "axios";
import { Korisnik } from "./models/Korisnik";
import { LoginDTO } from "./models/LoginDTO";
import { RegistracijaDTO } from "./models/RegistracijaDTO";

const baseURL = "http://localhost:8081/korisnici/";

export function login(credentials: LoginDTO) {
  return axios.post(baseURL + "login", credentials);
}

export function registracija(registracijaDTO: RegistracijaDTO) {
  return axios.post(baseURL + "registracija", registracijaDTO);
}

export function izmenaKorisnika(korisnik: Korisnik) {
  return axios.put(baseURL, korisnik);
}
