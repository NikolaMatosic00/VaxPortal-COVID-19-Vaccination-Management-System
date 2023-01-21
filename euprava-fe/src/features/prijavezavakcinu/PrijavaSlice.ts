import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Prijava } from "./models/Prijava";

export interface PrijavaState {
  trenutnoPrikazanePrijave: Prijava[];
  korisnikovePrijave: Prijava[];
  kriterijumiPretrage: {
    prezime: string;
    jmbg: string;
  };
  prijavaZaKreiranje: Prijava;
  prijavaZaOtkazivanje: Prijava;
}

const initialState: PrijavaState = {
  trenutnoPrikazanePrijave: [],
  korisnikovePrijave: [],
  kriterijumiPretrage: {
    prezime: "",
    jmbg: "",
  },
  prijavaZaKreiranje: {
    pacijentJMBG: "",
    vakcina: "",
  },
  prijavaZaOtkazivanje: {
    pacijentJMBG: "",
    vakcina: "",
  },
};

export const PrijavaSlice = createSlice({
  name: "PrijavaSliceName",
  initialState,
  reducers: {
    ucitajSvePrijave() {},
    staviUcitanePrijaveUStore(state, action: PayloadAction<Prijava[]>) {
      state.trenutnoPrikazanePrijave = action.payload;
    },
    ucitajSveKorisnikovePrijave() {},
    staviUcitaneKorisnikovePrijaveUStore(
      state,
      action: PayloadAction<Prijava[]>
    ) {
      state.korisnikovePrijave = action.payload;
    },
    kreirajPrijavu(
      state,
      action: PayloadAction<{ pacijentJMBG: string; vakcina: string }>
    ) {
      state.prijavaZaKreiranje = action.payload;
    },
    otkaziPrijavu(
      state,
      action: PayloadAction<{ pacijentJMBG: string; vakcina: string }>
    ) {
      state.prijavaZaOtkazivanje = action.payload;
    },
    promeniKriterijume(
      state,
      action: PayloadAction<{ naziv: String; vrednost: any }>
    ) {
      state.kriterijumiPretrage = {
        ...state.kriterijumiPretrage,
        [action.payload.naziv.trim()]: action.payload.vrednost,
      };
    },
    resetujKriterijume(state) {
      state.kriterijumiPretrage = {
        prezime: "",
        jmbg: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  ucitajSvePrijave,
  staviUcitanePrijaveUStore,
  ucitajSveKorisnikovePrijave,
  staviUcitaneKorisnikovePrijaveUStore,
  kreirajPrijavu,
  otkaziPrijavu,
  promeniKriterijume,
  resetujKriterijume,
} = PrijavaSlice.actions;

export default PrijavaSlice.reducer;
