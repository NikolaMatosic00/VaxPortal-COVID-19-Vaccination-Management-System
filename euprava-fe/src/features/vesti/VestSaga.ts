import { call, put, takeEvery, select } from "redux-saga/effects";
import { Vest } from "./models/Vest";
import { kreiraj, sveVesti } from "./VestService";
import {
  kreirajVest,
  ucitajSveVesti,
  staviUcitaneVestiUStore,
} from "./VestSlice";
import { RootState } from "../../store";
import { VestDTO } from "./models/VestDTO";

const getVestZaKreiranje = (state: RootState) => state.vesti.vestZaKreiranje;

function* workGetSveVesti() {
  try {
    const response: {
      data: Vest[];
    } = yield call(sveVesti);

    yield put(staviUcitaneVestiUStore(response.data));
  } catch (e: any) {
    alert("Server nije podignut podignut podignut");
  }
}

function* workKreirajVest() {
  const vestDTO: VestDTO = yield select(getVestZaKreiranje);
  try {
    yield call(kreiraj, vestDTO);
    alert("Uspesno ste kreirali vest");
    window.location.assign("/vesti");
  } catch (e: any) {
    alert(e.response.data.errorMessage);
  }
}

//takeEvery pregledaj takeLast etc.
export function* getSveVestiSaga() {
  yield takeEvery(ucitajSveVesti.type, workGetSveVesti);
}

export function* kreirajVestSaga() {
  yield takeEvery(kreirajVest.type, workKreirajVest);
}
