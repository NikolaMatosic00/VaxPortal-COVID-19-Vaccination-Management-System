import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DnevniIzvestaj } from "./models/DnevniIzvestaj";

export interface DnevniIzvestajState {
  najskoriji: DnevniIzvestaj;
  zaKreiranje: DnevniIzvestaj;
}

const initialState: DnevniIzvestajState = {
  najskoriji: {
    brojObolelihUPoslednjemDanu: 0,
    brojTestiranihUPoslednjemDanu: 0,
    brojObolelihOdPocetkaPandemije: 0,
    brojHospitalizovanih: 0,
    brojNaRespiratorima: 0,
    datumVremeObjavljivanja: "",
  },
  zaKreiranje: {
    brojObolelihUPoslednjemDanu: 0,
    brojTestiranihUPoslednjemDanu: 0,
    brojObolelihOdPocetkaPandemije: 0,
    brojHospitalizovanih: 0,
    brojNaRespiratorima: 0,
    datumVremeObjavljivanja: "",
  },
};

export const DnevniIzvestajSlice = createSlice({
  name: "dnevniIzvestajSliceName",
  initialState,
  reducers: {
    dobaviPoslednji() {},
    staviPoslednjiUStore(state, action: PayloadAction<DnevniIzvestaj>) {
      state.najskoriji = action.payload;
    },
    kreirajNoviDnevniIzvestaj(state, action: PayloadAction<DnevniIzvestaj>) {
      state.zaKreiranje = action.payload;
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  dobaviPoslednji,
  staviPoslednjiUStore,
  kreirajNoviDnevniIzvestaj,
} = DnevniIzvestajSlice.actions;

export default DnevniIzvestajSlice.reducer;
