import { call, put, takeEvery, select } from "redux-saga/effects";
import { DnevniIzvestaj } from "./models/DnevniIzvestaj";
import { kreiraj, poslednji } from "./DnevniIzvestajService";
import {
  dobaviPoslednji,
  kreirajNoviDnevniIzvestaj,
  staviPoslednjiUStore,
} from "./DnevniIzvestajSlice";
import { RootState } from "../../store";

const getDnevniZaKreiranje = (state: RootState) => state.dnevni.zaKreiranje;

function* workGetPoslednji() {
  try {
    const response: {
      data: DnevniIzvestaj;
    } = yield call(poslednji);

    yield put(staviPoslednjiUStore(response.data));
  } catch (e: any) {
    alert("Server nije podignut podignut podignut");
  }
}

function* workKreirajDnevni() {
  const dnevniDTO: DnevniIzvestaj = yield select(getDnevniZaKreiranje);
  try {
    yield call(kreiraj, dnevniDTO);
    alert("Uspesno ste kreirali dnevni");
    window.location.assign("/vesti");
  } catch (e: any) {
    alert(e.response.data.errorMessage);
  }
}

//takeEvery pregledaj takeLast etc.
export function* getPoslednjiSaga() {
  yield takeEvery(dobaviPoslednji.type, workGetPoslednji);
}

export function* kreirajDnevniSaga() {
  yield takeEvery(kreirajNoviDnevniIzvestaj.type, workKreirajDnevni);
}
