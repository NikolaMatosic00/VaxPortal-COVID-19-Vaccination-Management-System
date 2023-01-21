import axios from "axios";
import { DnevniIzvestaj } from "./models/DnevniIzvestaj";

const baseURL = "http://localhost:8081/dnevni/";

export function poslednji() {
  return axios.get(baseURL);
}

export function kreiraj(dnevniIzvestaj: DnevniIzvestaj) {
  return axios.post(baseURL, dnevniIzvestaj);
}
