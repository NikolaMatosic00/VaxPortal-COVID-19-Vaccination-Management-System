import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Zahtev } from "./models/Zahtev";

export interface ZahtevState {
  sviZahtevi: Zahtev[];
  zahtevZaKreiranje: Zahtev;
  imenaVakcina: string[];
  podaciZaOdobravanje: {
    imeVakcine: string;
    kolicina: number;
  };
  podaciZaOdbijanje: {
    imeVakcine: string;
    porukaAdmina: string;
  };
  podaciZaVracanje: {
    imeVakcine: string;
    porukaAdmina: string;
  };
  podaciZaPromenu: {
    imeVakcine: string;
    kolicina: number;
  };
}

const initialState: ZahtevState = {
  sviZahtevi: [],
  zahtevZaKreiranje: {
    vakcina: "",
    kolicina: 0,
    razlog: "",
    porukaAdministratora: "",
    status: "",
  },
  imenaVakcina: [],
  podaciZaOdobravanje: {
    imeVakcine: "",
    kolicina: 0,
  },
  podaciZaOdbijanje: {
    imeVakcine: "",
    porukaAdmina: "",
  },
  podaciZaVracanje: {
    imeVakcine: "",
    porukaAdmina: "",
  },
  podaciZaPromenu: {
    imeVakcine: "",
    kolicina: 0,
  },
};

export const ZahtevSlice = createSlice({
  name: "zahtevSliceName",
  initialState,
  reducers: {
    ucitajSveZahteve() {},
    staviUcitaneZahteveUStore(state, action: PayloadAction<Zahtev[]>) {
      state.sviZahtevi = action.payload;
    },
    kreirajZahtev(state, action: PayloadAction<Zahtev>) {
      state.zahtevZaKreiranje = action.payload;
    },
    dobaviImenaVackina() {},
    staviImenaUStore(state, action: PayloadAction<string[]>) {
      state.imenaVakcina = action.payload;
    },
    odobriZahtev(
      state,
      action: PayloadAction<{ imeVakcine: string; kolicina: number }>
    ) {
      state.podaciZaOdobravanje = action.payload;
    },
    odbijZahtev(
      state,
      action: PayloadAction<{ imeVakcine: string; porukaAdmina: string }>
    ) {
      state.podaciZaOdbijanje = action.payload;
    },
    vratiZahtev(
      state,
      action: PayloadAction<{ imeVakcine: string; porukaAdmina: string }>
    ) {
      state.podaciZaVracanje = action.payload;
    },
    promeniZahtev(
      state,
      action: PayloadAction<{ imeVakcine: string; kolicina: number }>
    ) {
      state.podaciZaPromenu = action.payload;
    },
  },
});

export const {
  ucitajSveZahteve,
  staviUcitaneZahteveUStore,
  kreirajZahtev,
  dobaviImenaVackina,
  staviImenaUStore,
  odobriZahtev,
  odbijZahtev,
  vratiZahtev,
  promeniZahtev,
} = ZahtevSlice.actions;

export default ZahtevSlice.reducer;
