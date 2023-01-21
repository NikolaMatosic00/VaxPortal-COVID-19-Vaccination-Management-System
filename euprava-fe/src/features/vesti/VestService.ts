import axios from "axios";
import { Vest } from "./models/Vest";
import { VestDTO } from "./models/VestDTO";

const baseURL = "http://localhost:8081/vesti/";

export function sveVesti() {
  return axios.get(baseURL);
}

export function kreiraj(vestoDTO: VestDTO) {
  return axios.post(baseURL, vestoDTO);
}
