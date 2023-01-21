import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PrimljenaVakcina } from "./models/PrimljenaVakcina";

export interface PrimljenaVakcinaState {
  sveKorisnikovePrimljeneVakcine: PrimljenaVakcina[];
  zaKreiranje: PrimljenaVakcina;
}

const initialState: PrimljenaVakcinaState = {
  sveKorisnikovePrimljeneVakcine: [],
  zaKreiranje: {
    pacijentJMBG: "",
    vakcina: "",
  },
};

export const PrimljenaVakcinaSlice = createSlice({
  name: "primljenaSliceName",
  initialState,
  reducers: {
    ucitajSveKorisnikovePrimljeneVakcine() {},
    staviUcitaneKorisnikovePrimljeneVakcineUStore(
      state,
      action: PayloadAction<PrimljenaVakcina[]>
    ) {
      state.sveKorisnikovePrimljeneVakcine = action.payload;
    },
    dajVakcinui(state, action: PayloadAction<PrimljenaVakcina>) {
      state.zaKreiranje = action.payload;
    },
  },
});

export const {
  ucitajSveKorisnikovePrimljeneVakcine,
  staviUcitaneKorisnikovePrimljeneVakcineUStore,
  dajVakcinui,
} = PrimljenaVakcinaSlice.actions;

export default PrimljenaVakcinaSlice.reducer;
