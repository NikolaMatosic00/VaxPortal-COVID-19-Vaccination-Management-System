import { call, put, takeEvery, select } from "redux-saga/effects";
import { PrimljenaVakcina } from "./models/PrimljenaVakcina";
import { kreiraj, pacijentovePrimljene } from "./PrimljenaService";
import { RootState } from "../../store";
import {
  dajVakcinui,
  staviUcitaneKorisnikovePrimljeneVakcineUStore,
  ucitajSveKorisnikovePrimljeneVakcine,
} from "./PrimljenaSlice";
import { Korisnik } from "../korisnici/models/Korisnik";

const getPrimljenaVakcinaZaKreiranje = (state: RootState) =>
  state.primljene.zaKreiranje;

const getUlogovani = (state: RootState) => state.korisnici.ulogovaniKorisnik;

function* workUcitajSveKorisnikovePrijave() {
  try {
    const ulogovani: Korisnik = yield select(getUlogovani);

    const response: {
      data: PrimljenaVakcina[];
    } = yield call(pacijentovePrimljene, ulogovani.jmbg);

    yield put(staviUcitaneKorisnikovePrimljeneVakcineUStore(response.data));
  } catch (e: any) {
    alert("Server nije podignut podignut podignut");
  }
}
function* workKreirajPrimljenuVakcinu() {
  const primljenaVakcina: PrimljenaVakcina = yield select(
    getPrimljenaVakcinaZaKreiranje
  );
  try {
    yield call(kreiraj, primljenaVakcina);
    alert(
      "Uspesno ste dali vakcinu korisniku " + primljenaVakcina.pacijentJMBG
    );
    window.location.assign("/prijave");
  } catch (e: any) {
    alert(e.response.data.errorMessage);
  }
}

export function* getSvePrimljenaVakcinaeSaga() {
  yield takeEvery(
    ucitajSveKorisnikovePrimljeneVakcine.type,
    workUcitajSveKorisnikovePrijave
  );
}

export function* dajVakcinuiSaga() {
  yield takeEvery(dajVakcinui.type, workKreirajPrimljenuVakcinu);
}
