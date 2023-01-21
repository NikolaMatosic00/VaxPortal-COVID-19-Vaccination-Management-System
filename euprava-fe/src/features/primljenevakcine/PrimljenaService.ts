import axios from "axios";
import { PrimljenaVakcina } from "./models/PrimljenaVakcina";

const baseURL = "http://localhost:8081/primljenevakcine/";

export function kreiraj(primljenevakcina: PrimljenaVakcina) {
  return axios.post(baseURL, primljenevakcina);
}

export function pacijentovePrimljene(jmbg: string) {
  return axios.get(baseURL + "?jmbg=" + jmbg);
}
