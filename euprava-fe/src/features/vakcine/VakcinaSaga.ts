import { call, put, takeEvery, select } from "redux-saga/effects";
import {
  sveVakcinePoKriterijumima,
  kreiraj,
  pojedinacnaZaPrikaz,
  sveDrzaveProizvodjaca,
} from "./VakcinaService";
import { RootState } from "../../store";
import {
  dobaviDrzaveProizvodjaca,
  dobaviVakcinuZaPrikaz,
  kreirajVakcinu,
  staviDrzaveProizvodjacaUStore,
  staviUcitaneTrenutneVakcineUStore,
  ucitajTrenutnoPrikazaneVakcine,
  vakcinaZaPrikaz,
} from "./VakcinaSlice";
import { Vakcina } from "./models/Vakcina";
import { PojedinacnaVakcina } from "./models/PojedinacnaVakcina";

const getImeOveZaPrikaz = (state: RootState) =>
  state.vakcine.imeVakcineZaPretragu;
const getKriterijumiPretrage = (state: RootState) =>
  state.vakcine.kriterijumiPretrage;
const getVakcinaZaKreiranje = (state: RootState) =>
  state.vakcine.vakcinaZaKreiranje;

// function* workGetSveVakcine() {
//   try {
//     const response: {
//       data: Vakcina[];
//     } = yield call(sveVakcinePoKriterijumima);

//     yield put(staviUcitaneVakcineUStore(response.data));
//   } catch (e: any) {
//     alert("Server nije podignut podignut podignut");
//   }
// }

function* workDobaviVakcinuZaPrikaz() {
  try {
    const ime: string = yield select(getImeOveZaPrikaz);

    const response: {
      data: PojedinacnaVakcina;
    } = yield call(pojedinacnaZaPrikaz, ime);

    yield put(vakcinaZaPrikaz(response.data));
  } catch (e: any) {
    alert("Server nije podignut podignut podignut");
  }
}

function* workGetSveTrenutneVakcine() {
  try {
    const kriterijumi: {
      naziv: string;
      imeProizvodjaca: string;
      drzava: string;
      minKolicina: number;
      maxKolicina: number;
      sort: string;
    } = yield select(getKriterijumiPretrage);

    const response: {
      data: Vakcina[];
    } = yield call(
      sveVakcinePoKriterijumima,
      kriterijumi.naziv,
      kriterijumi.imeProizvodjaca,
      kriterijumi.drzava,
      kriterijumi.minKolicina,
      kriterijumi.maxKolicina,
      kriterijumi.sort
    );

    yield put(staviUcitaneTrenutneVakcineUStore(response.data));
  } catch (e: any) {
    alert("Server nije podignut podignut podignut");
  }
}

function* workDobaviDrzaveProizvodjaca() {
  try {
    const response: {
      data: string[];
    } = yield call(sveDrzaveProizvodjaca);

    yield put(staviDrzaveProizvodjacaUStore(response.data));
  } catch (e: any) {
    alert("Server nije podignut podignut podignut");
  }
}

function* workKreirajVakcinu() {
  const kreacijaVakcinice: { ime: string; imeProizvodjaca: string } =
    yield select(getVakcinaZaKreiranje);
  try {
    yield call(
      kreiraj,
      kreacijaVakcinice.ime,
      kreacijaVakcinice.imeProizvodjaca
    );
    alert("Uspesno ste kreirali Vakcinu");
    window.location.assign("/login");
  } catch (e: any) {
    console.log(e.response.data.errors[0].defaultMessage);
  }
}

// export function* getSveVakcineSaga() {
//   yield takeEvery(ucitajSveVakcine.type, workGetSveVakcine);
// }

export function* getSveTrenutneVakcineSaga() {
  yield takeEvery(
    ucitajTrenutnoPrikazaneVakcine.type,
    workGetSveTrenutneVakcine
  );
}

export function* dobaviDrzaveProizvodjacaSaga() {
  yield takeEvery(dobaviDrzaveProizvodjaca.type, workDobaviDrzaveProizvodjaca);
}

export function* kreirajVakcinuSaga() {
  yield takeEvery(kreirajVakcinu.type, workKreirajVakcinu);
}

export function* dobaviVakcinuZaPrikazSaga() {
  yield takeEvery(dobaviVakcinuZaPrikaz.type, workDobaviVakcinuZaPrikaz);
}

// ucitajSveVakcine,
//   staviUcitaneVakcineUStore,
//   ucitajTrenutnoPrikazaneVakcine,
//   staviUcitaneTrenutneVakcineUStore,
//   vakcinaZaPrikaz,
//   kreirajVakcinu,
