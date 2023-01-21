import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Korisnik } from "./models/Korisnik";
import { LoginDTO } from "./models/LoginDTO";
import { RegistracijaDTO } from "./models/RegistracijaDTO";

export interface KorisnikState {
  ulogovaniKorisnik: Korisnik;
  loginCredentials: LoginDTO;
  registracijaKorisnik: RegistracijaDTO;
}

const initialState: KorisnikState = {
  ulogovaniKorisnik: {
    ime: "",
    prezime: "",
    datumRodjenja: "",
    jmbg: "",
    adresa: "",
    telefon: "",
    email: "",
    lozinka: "",
    datumVremeRegistracije: "",
    uloga: "",
  },
  registracijaKorisnik: {
    ime: "",
    prezime: "",
    datumRodjenja: "",
    jmbg: "",
    adresa: "",
    telefon: "",
    email: "",
    lozinka: "",
  },
  loginCredentials: { email: "", lozinka: "" },
};

export const KorisnikSlice = createSlice({
  name: "korisnikSliceName",
  initialState,
  reducers: {
    posaljiKredencijale(state, action: PayloadAction<LoginDTO>) {
      state.loginCredentials = action.payload;
    },
    ulogovaniKorisnik(state, action: PayloadAction<Korisnik>) {
      state.ulogovaniKorisnik = action.payload;
    },
    registrujKorisnika(state, action: PayloadAction<RegistracijaDTO>) {
      state.registracijaKorisnik = action.payload;
    },
    odjaviKorisnika(state) {
      state.ulogovaniKorisnik = new Korisnik(
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      );
    },
    promeniUlogovanog(
      state,
      action: PayloadAction<{ naziv: String; vrednost: String }>
    ) {
      state.ulogovaniKorisnik = {
        ...state.ulogovaniKorisnik,
        [action.payload.naziv.toLowerCase()]: action.payload.vrednost,
      };
    },
    sacuvajIzmene() {},
  },
});

// Action creators are generated for each case reducer function
export const {
  posaljiKredencijale,
  ulogovaniKorisnik,
  registrujKorisnika,
  odjaviKorisnika,
  promeniUlogovanog,
  sacuvajIzmene,
} = KorisnikSlice.actions;

export default KorisnikSlice.reducer;
