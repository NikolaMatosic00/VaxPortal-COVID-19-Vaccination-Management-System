import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Vest } from "./models/Vest";
import { VestDTO } from "./models/VestDTO";

export interface VestState {
  sveVesti: Vest[];
  vestZaKreiranje: VestDTO;
}

const initialState: VestState = {
  sveVesti: [],
  vestZaKreiranje: {
    naziv: "",
    sadrzaj: "",
  },
};

export const VestSlice = createSlice({
  name: "vestSliceName",
  initialState,
  reducers: {
    ucitajSveVesti() {},
    staviUcitaneVestiUStore(state, action: PayloadAction<Vest[]>) {
      state.sveVesti = action.payload;
    },
    kreirajVest(state, action: PayloadAction<VestDTO>) {
      state.vestZaKreiranje = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ucitajSveVesti, kreirajVest, staviUcitaneVestiUStore } =
  VestSlice.actions;

export default VestSlice.reducer;
