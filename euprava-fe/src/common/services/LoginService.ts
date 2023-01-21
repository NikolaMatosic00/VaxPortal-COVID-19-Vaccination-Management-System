import axios from "axios";
import { LoginDTO } from "../../features/korisnici/models/LoginDTO";

const baseURL = "http://localhost:8081/korisnici/login";

export function create(credentials: LoginDTO) {
  return axios.post(baseURL, credentials);
}
