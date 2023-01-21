import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Vakcina } from "./models/Vakcina";
import { PojedinacnaVakcina } from "./models/PojedinacnaVakcina";

export interface VakcinaState {
  sveVakcine: Vakcina[];
  trenutnoPrikazaneVakcine: Vakcina[];
  drzaveProizvodjaca: string[];
  vakcinaZaPrikaz: PojedinacnaVakcina;
  vakcinaZaKreiranje: { ime: string; imeProizvodjaca: string };
  imeVakcineZaPretragu: string;
  kriterijumiPretrage: {
    naziv: string;
    imeProizvodjaca: string;
    drzava: string;
    minKolicina: number;
    maxKolicina: number;
    sort: string;
  };
}

const initialState: VakcinaState = {
  sveVakcine: [],
  trenutnoPrikazaneVakcine: [],
  drzaveProizvodjaca: [],
  vakcinaZaPrikaz: {
    ime: "",
    dostupnaKolicina: 0,
    imeProizvodjaca: "",
    drzavaProizvodjaca: "",
  },
  vakcinaZaKreiranje: { ime: "", imeProizvodjaca: "" },
  imeVakcineZaPretragu: "",
  kriterijumiPretrage: {
    naziv: "",
    imeProizvodjaca: "",
    drzava: "",
    minKolicina: 0,
    maxKolicina: 1000000000,
    sort: "",
  },
};

export const VakcinaSlice = createSlice({
  name: "VakcinaSliceName",
  initialState,
  reducers: {
    ucitajSveVakcine() {},
    staviUcitaneVakcineUStore(state, action: PayloadAction<Vakcina[]>) {
      state.sveVakcine = action.payload;
    },
    ucitajTrenutnoPrikazaneVakcine() {},
    staviUcitaneTrenutneVakcineUStore(state, action: PayloadAction<Vakcina[]>) {
      state.trenutnoPrikazaneVakcine = action.payload;
    },
    dobaviDrzaveProizvodjaca() {},
    staviDrzaveProizvodjacaUStore(state, action: PayloadAction<string[]>) {
      state.drzaveProizvodjaca = action.payload;
    },
    dobaviVakcinuZaPrikaz(state, action: PayloadAction<string>) {
      state.imeVakcineZaPretragu = action.payload;
    },
    vakcinaZaPrikaz(state, action: PayloadAction<PojedinacnaVakcina>) {
      state.vakcinaZaPrikaz = action.payload;
    },
    kreirajVakcinu(
      state,
      action: PayloadAction<{ ime: string; imeProizvodjaca: string }>
    ) {
      state.vakcinaZaKreiranje = action.payload;
    },
    promeniKriterijume(
      state,
      action: PayloadAction<{ naziv: String; vrednost: any }>
    ) {
      if (Number(action.payload.vrednost)) {
        state.kriterijumiPretrage = {
          ...state.kriterijumiPretrage,
          [action.payload.naziv.trim()]: Number(action.payload.vrednost),
        };
      } else {
        state.kriterijumiPretrage = {
          ...state.kriterijumiPretrage,
          [action.payload.naziv.trim()]: action.payload.vrednost,
        };
      }
    },
    resetujKriterijume(state) {
      state.kriterijumiPretrage = {
        naziv: "",
        imeProizvodjaca: "",
        drzava: "",
        minKolicina: 0,
        maxKolicina: 1000000000,
        sort: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  ucitajSveVakcine,
  staviUcitaneVakcineUStore,
  ucitajTrenutnoPrikazaneVakcine,
  staviUcitaneTrenutneVakcineUStore,
  dobaviDrzaveProizvodjaca,
  staviDrzaveProizvodjacaUStore,
  dobaviVakcinuZaPrikaz,
  vakcinaZaPrikaz,
  kreirajVakcinu,
  promeniKriterijume,
  resetujKriterijume,
} = VakcinaSlice.actions;

export default VakcinaSlice.reducer;
