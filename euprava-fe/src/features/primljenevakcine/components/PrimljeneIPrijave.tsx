import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ucitajSveKorisnikovePrijave } from "../../prijavezavakcinu/PrijavaSlice";
import { ucitajSveKorisnikovePrimljeneVakcine } from "../PrimljenaSlice";
import Kartica from "./Kartica";
import "./styles/PrimljeneIPrijave.css";

function PrimljeneIPrijave() {
  const getSvePrijaveKorisnika = useSelector(
    (state: RootState) => state.prijave.korisnikovePrijave
  );
  const getSvePrimljeneKorisnika = useSelector(
    (state: RootState) => state.primljene.sveKorisnikovePrimljeneVakcine
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ucitajSveKorisnikovePrijave());
    dispatch(ucitajSveKorisnikovePrimljeneVakcine());
  }, []);
  return (
    <div className="vesti_stranica">
      <div className="grupacije">
        <div>
          <h1>Primljene vakcine</h1>
          {getSvePrimljeneKorisnika.map((primljena, i) => {
            return <Kartica {...primljena} key={i} />;
          })}
        </div>
        <div>
          <h1>Aktivne prijave</h1>
          {getSvePrijaveKorisnika.map((prijava, i) => {
            return <Kartica {...prijava} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PrimljeneIPrijave;
