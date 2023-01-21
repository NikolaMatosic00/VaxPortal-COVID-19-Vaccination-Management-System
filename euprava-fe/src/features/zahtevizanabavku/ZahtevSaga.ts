import { call, put, takeEvery, select } from "redux-saga/effects";
import { Zahtev } from "./models/Zahtev";
import {
  kreiraj,
  sviZahtevi,
  odobri,
  odbij,
  svaImenaVakcina,
  vrati,
  promeni,
} from "./ZahtevService";
import {
  kreirajZahtev,
  ucitajSveZahteve,
  staviUcitaneZahteveUStore,
  odobriZahtev,
  odbijZahtev,
  staviImenaUStore,
  dobaviImenaVackina,
  vratiZahtev,
  promeniZahtev,
} from "./ZahtevSlice";
import { RootState } from "../../store";

const getZahtevZaKreiranje = (state: RootState) =>
  state.zahtevi.zahtevZaKreiranje;

const getPodaciZaOdobravanje = (state: RootState) =>
  state.zahtevi.podaciZaOdobravanje;

const getPodaciZaOdbijanje = (state: RootState) =>
  state.zahtevi.podaciZaOdbijanje;

const getPodaciZaVracanje = (state: RootState) =>
  state.zahtevi.podaciZaVracanje;

const getPodaciZaPromenu = (state: RootState) => state.zahtevi.podaciZaPromenu;

function* workGetSveZahtevi() {
  try {
    const response: {
      data: Zahtev[];
    } = yield call(sviZahtevi);

    yield put(staviUcitaneZahteveUStore(response.data));
  } catch (e: any) {
    alert("Server nije podignut podignut podignut");
  }
}

function* workKreirajZahtev() {
  const zahtev: Zahtev = yield select(getZahtevZaKreiranje);
  try {
    yield call(kreiraj, zahtev);
    alert("Uspesno ste kreirali zahtev za nabavku");
    window.location.assign("/zahtevizanabavku");
  } catch (e: any) {
    alert(e.response.data.errorMessage);
  }
}

function* workDobaviImenaVackina() {
  try {
    const response: {
      data: string[];
    } = yield call(svaImenaVakcina);

    yield put(staviImenaUStore(response.data));
  } catch (e: any) {
    alert("Server nije podignut podignut podignut");
  }
}

function* workOdobriZahtev() {
  const zahtev: { imeVakcine: string; kolicina: number } = yield select(
    getPodaciZaOdobravanje
  );
  try {
    yield call(odobri, zahtev.imeVakcine, zahtev.kolicina);
    alert("Uspesno ste odobrili zahtev za nabavku");
    window.location.assign("/zahtevizanabavku");
  } catch (e: any) {
    alert(e.response.data.errorMessage);
  }
}

function* workOdbijZahtev() {
  const zahtev: { imeVakcine: string; porukaAdmina: string } = yield select(
    getPodaciZaOdbijanje
  );
  try {
    yield call(odbij, zahtev.imeVakcine, zahtev.porukaAdmina);
    alert("Uspesno ste odbili zahtev za nabavku");
    window.location.assign("/zahtevizanabavku");
  } catch (e: any) {
    alert(e.response.data.errorMessage);
  }
}

function* workVratiZahtev() {
  const zahtev: { imeVakcine: string; porukaAdmina: string } = yield select(
    getPodaciZaVracanje
  );
  try {
    yield call(vrati, zahtev.imeVakcine, zahtev.porukaAdmina);
    alert(
      "Uspesno ste vratili zahtev za nabavku da ga promeni medicinsko osoblje"
    );
    window.location.assign("/zahtevizanabavku");
  } catch (e: any) {
    alert(e.response.data.errorMessage);
  }
}

function* workPromeniZahtev() {
  const zahtev: { imeVakcine: string; kolicina: number } = yield select(
    getPodaciZaPromenu
  );
  try {
    yield call(promeni, zahtev.imeVakcine, zahtev.kolicina);
    alert("Uspesno ste vratili izmenjen zahtev za nabavku adminu");
    window.location.assign("/zahtevizanabavku");
  } catch (e: any) {
    alert(e.response.data.errorMessage);
  }
}

//takeEvery pregledaj takeLast etc.
export function* getSveZahteveSaga() {
  yield takeEvery(ucitajSveZahteve.type, workGetSveZahtevi);
}

export function* kreirajZahtevSaga() {
  yield takeEvery(kreirajZahtev.type, workKreirajZahtev);
}

export function* dobaviImenaVackinaSaga() {
  yield takeEvery(dobaviImenaVackina.type, workDobaviImenaVackina);
}

export function* odobriZahtevSaga() {
  yield takeEvery(odobriZahtev.type, workOdobriZahtev);
}

export function* odbijZahtevSaga() {
  yield takeEvery(odbijZahtev.type, workOdbijZahtev);
}

export function* vratiZahtevSaga() {
  yield takeEvery(vratiZahtev.type, workVratiZahtev);
}

export function* promeniZahtevSaga() {
  yield takeEvery(promeniZahtev.type, workPromeniZahtev);
}
