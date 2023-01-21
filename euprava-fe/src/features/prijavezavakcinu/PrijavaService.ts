import axios from "axios";
import { Prijava } from "./models/Prijava";

const baseURL = "http://localhost:8081/prijavazavakcinu";

export function kreiraj(pacijentJMBG: string, vakcina: string) {
  return axios.post(baseURL, { pacijentJMBG, vakcina });
}

// export function dajVakcinicu(jmbg: string, vakcina: string) {
//   return axios.post("http://localhost:8081/primljenevakcine", {
//     jmbg,
//     vakcina,
//   });
// }

export function svePrijavePoKriterijumima(
  prezime: string = "",
  jmbg: string = ""
) {
  return axios.get(baseURL + "?prezime=" + prezime + "&jmbg=" + jmbg);
}

export function otkaziPrijavuVakcine(pacijentJMBG: string, vakcina: string) {
  return axios.post(baseURL + "/otkazi", { pacijentJMBG, vakcina });
}
