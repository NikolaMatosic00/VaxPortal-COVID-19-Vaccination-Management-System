import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { otkaziPrijavu } from "../../prijavezavakcinu/PrijavaSlice";
import "./styles/Kartica.css";

function Kartica(props: any) {
  const dispatch = useDispatch();

  const getJmbgUlogovanog = useSelector(
    (state: RootState) => state.korisnici.ulogovaniKorisnik.jmbg
  );

  const otkazivanje = () => {
    let obj = { pacijentJMBG: getJmbgUlogovanog, vakcina: props.vakcina };
    dispatch(otkaziPrijavu(obj));
  };

  return (
    <div className="zajednicka_kartica_za_prijave_i_primljene">
      {props.datumPrimanjaVakcine == null ? (
        <div className="aktivne_prijave_korisnika">
          <h3>{props.vakcina}</h3>
          <button onClick={otkazivanje}>Otkazi</button>
        </div>
      ) : (
        <div className="primljene_vakcine_korisnika">
          <h2>
            {props.datumPrimanjaVakcine.substring(
              0,
              props.datumPrimanjaVakcine.indexOf("T")
            )}
          </h2>
          <h3>{props.vakcina}</h3>
        </div>
      )}
    </div>
  );
}

export default Kartica;
