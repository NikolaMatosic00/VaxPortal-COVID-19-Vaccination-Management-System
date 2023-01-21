import { call, put, takeEvery, select } from "redux-saga/effects";
import {
  kreiraj,
  otkaziPrijavuVakcine,
  svePrijavePoKriterijumima,
} from "./PrijavaService";
import { RootState } from "../../store";
import {
  kreirajPrijavu,
  otkaziPrijavu,
  staviUcitaneKorisnikovePrijaveUStore,
  staviUcitanePrijaveUStore,
  ucitajSveKorisnikovePrijave,
  ucitajSvePrijave,
} from "./PrijavaSlice";
import { Prijava } from "./models/Prijava";
import { Korisnik } from "../korisnici/models/Korisnik";

const getKriterijumiPretrage = (state: RootState) =>
  state.prijave.kriterijumiPretrage;

const getUlogovani = (state: RootState) => state.korisnici.ulogovaniKorisnik;

const getPodaciZaKreiranje = (state: RootState) =>
  state.prijave.prijavaZaKreiranje;

const getPodaciZaOtkazivanje = (state: RootState) =>
  state.prijave.prijavaZaOtkazivanje;

function* workGetSveTrenutnePrijave() {
  try {
    const kriterijumi: {
      prezime: string;
      jmbg: string;
    } = yield select(getKriterijumiPretrage);

    const response: {
      data: Prijava[];
    } = yield call(
      svePrijavePoKriterijumima,
      kriterijumi.prezime,
      kriterijumi.jmbg
    );

    yield put(staviUcitanePrijaveUStore(response.data));
  } catch (e: any) {
    alert("Server nije podignut podignut podignut");
  }
}

function* workUcitajSveKorisnikovePrijave() {
  try {
    const ulogovani: Korisnik = yield select(getUlogovani);

    const response: {
      data: Prijava[];
    } = yield call(svePrijavePoKriterijumima, "", ulogovani.jmbg);

    yield put(staviUcitaneKorisnikovePrijaveUStore(response.data));
  } catch (e: any) {
    alert("Server nije podignut podignut podignut");
  }
}

function* workKreirajPrijavu() {
  const zahtev: { pacijentJMBG: string; vakcina: string } = yield select(
    getPodaciZaKreiranje
  );
  try {
    yield call(kreiraj, zahtev.pacijentJMBG, zahtev.vakcina);
    alert(
      "Uspesno ste se prijavili za vakcinaciju " +
        zahtev.vakcina +
        " vakcinicom"
    );
    window.location.assign("/korisnikovevakcine");
  } catch (e: any) {
    alert(e.response.data.errorMessage);
  }
}

function* workOtkaziPrijavu() {
  const zahtev: { pacijentJMBG: string; vakcina: string } = yield select(
    getPodaciZaOtkazivanje
  );
  try {
    yield call(otkaziPrijavuVakcine, zahtev.pacijentJMBG, zahtev.vakcina);
    alert(
      "Uspesno ste otkazali prijavu za vakcinaciju " +
        zahtev.vakcina +
        " vakcinicom"
    );
    window.location.assign("/korisnikovevakcine");
  } catch (e: any) {
    alert(e.response.data.errorMessage);
  }
}

export function* ucitajSvePrijaveSaga() {
  yield takeEvery(ucitajSvePrijave.type, workGetSveTrenutnePrijave);
}

export function* ucitajSveKorisnikovePrijaveSaga() {
  yield takeEvery(
    ucitajSveKorisnikovePrijave.type,
    workUcitajSveKorisnikovePrijave
  );
}

export function* kreirajPrijavuSaga() {
  yield takeEvery(kreirajPrijavu.type, workKreirajPrijavu);
}

export function* otkaziPrijavuSaga() {
  yield takeEvery(otkaziPrijavu.type, workOtkaziPrijavu);
}
