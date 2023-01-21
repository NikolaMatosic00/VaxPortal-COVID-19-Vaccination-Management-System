import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { kreirajPrijavu } from "../PrijavaSlice";

function PrijavaNova() {
  const [imeVakcine, setImeVakcine] = useState("");

  const dispatch = useDispatch();
  const imenaVakcina = useSelector(
    (state: RootState) => state.zahtevi.imenaVakcina
  );
  const jmbgUlogovanog = useSelector(
    (state: RootState) => state.korisnici.ulogovaniKorisnik.jmbg
  );
  const posalji = () => {
    let obj = { pacijentJMBG: jmbgUlogovanog, vakcina: imeVakcine };
    dispatch(kreirajPrijavu(obj));
  };

  return (
    <div className="login_counainer">
      <h2>Prijava Za Vakcinu</h2>
      <div className="login_kartica">
        <select
          name="vakcine"
          id="drzave_pretraga_vakcina"
          onChange={(e) => setImeVakcine(e.target.value)}
        >
          <option value="">--Vakcina--</option>
          {imenaVakcina.map((ime, i) => {
            return (
              <option value={ime} key={i}>
                {ime}
              </option>
            );
          })}
        </select>
        <button onClick={posalji}>Prijavi se</button>
      </div>
    </div>
  );
}

export default PrijavaNova;
