import { call, put, takeEvery, select } from "redux-saga/effects";
import { Korisnik } from "./models/Korisnik";
import { izmenaKorisnika, login, registracija } from "./KorisnikService";
import {
  posaljiKredencijale,
  ulogovaniKorisnik,
  registrujKorisnika,
  sacuvajIzmene,
} from "./KorisnikSlice";
import { RootState } from "../../store";
import { LoginDTO } from "./models/LoginDTO";
import { RegistracijaDTO } from "./models/RegistracijaDTO";

const getCredentials = (state: RootState) => state.korisnici.loginCredentials;
const getUlogovani = (state: RootState) => state.korisnici.ulogovaniKorisnik;
const getRegistration = (state: RootState) =>
  state.korisnici.registracijaKorisnik;

function* workGetKorisnikByCredentials() {
  const credentials: LoginDTO = yield select(getCredentials);
  try {
    const response: {
      data: {
        status: string;
        errorMessage: string;
        results: {
          ime: string;
          prezime: string;
          datumRodjenja: string;
          jmbg: string;
          adresa: string;
          telefon: string;
          email: string;
          lozinka: string;
          datumVremeRegistracije: string;
          uloga: string;
        };
      };
    } = yield call(login, credentials);
    localStorage.setItem("token", "ROLE_" + response.data.results.uloga);
    const korisnik: Korisnik = new Korisnik(
      response.data.results.ime,
      response.data.results.prezime,
      response.data.results.datumRodjenja,
      response.data.results.jmbg,
      response.data.results.adresa,
      response.data.results.telefon,
      response.data.results.email,
      response.data.results.lozinka,
      response.data.results.datumVremeRegistracije,
      response.data.results.uloga
    );
    // console.log(response.data.results);
    yield put(ulogovaniKorisnik(response.data.results));
    const ulg: Korisnik = yield select(getUlogovani);
    window.location.assign("/vesti");
    // console.log(ulg);
    // put(ulogovaniKorisnik(korisnik));
    // yield put(ulogovaniKorisnik(response.data.results));
    // yield put(ulogovaniKorisnik(response.data.results));
  } catch (e: any) {
    e.response.data.errorMessage
      ? alert(e.response.data.errorMessage)
      : alert(e.response.data.errors[0].defaultMessage);
  }
}

function* workRegistrujKorisnika() {
  const registracijaDTO: RegistracijaDTO = yield select(getRegistration);
  try {
    yield call(registracija, registracijaDTO);
    alert("Uspesno ste se registrovali");
    window.location.assign("/login");
  } catch (e: any) {
    console.log(e.response.data.errors[0].defaultMessage);
  }
}
function* workSacuvajIzmene() {
  const ulogovani: Korisnik = yield select(getUlogovani);
  try {
    yield call(izmenaKorisnika, ulogovani);
    alert("Uspesno ste izmenili podatke");
    window.location.reload();
  } catch (e: any) {
    console.log(e.response.data.errors[0].defaultMessage);
  }
}

//takeEvery pregledaj takeLast etc.
export function* getKorisnikByCredentialsSaga() {
  yield takeEvery(posaljiKredencijale.type, workGetKorisnikByCredentials);
}

export function* registrujKorisnikaSaga() {
  yield takeEvery(registrujKorisnika.type, workRegistrujKorisnika);
}

export function* sacuvajizmeneSaga() {
  yield takeEvery(sacuvajIzmene.type, workSacuvajIzmene);
}
