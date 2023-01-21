import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  promeniKriterijume,
  resetujKriterijume,
  ucitajSvePrijave,
} from "../PrijavaSlice";
import PrijavaComponent from "./PrijavaComponent";
import "./styles/PrijavaSvePrijave.css";

function PrijavaSvePrijave() {
  const dispatch = useDispatch();

  const getSveTrenutnePrijave = useSelector(
    (state: RootState) => state.prijave.trenutnoPrikazanePrijave
  );

  const handleFormInputChange = (naziv: string) => (event: any) => {
    const vrednost = event.target.value;
    dispatch(promeniKriterijume({ naziv, vrednost }));
  };

  useEffect(() => {
    dispatch(resetujKriterijume());
    dispatch(ucitajSvePrijave());
  }, []);

  return (
    <div className="vesti_stranica">
      <div className="kriterijumi_pretraga_korisnickih_prijava">
        <input
          type="text"
          placeholder="Prezime"
          onChange={handleFormInputChange("prezime")}
        />
        <input
          type="text"
          placeholder="Jmbg"
          onChange={handleFormInputChange("jmbg")}
        />
        <button onClick={() => dispatch(ucitajSvePrijave())}>Pretrazi</button>
      </div>
      {getSveTrenutnePrijave.map((prijava, i) => {
        return <PrijavaComponent {...prijava} key={i} />;
      })}
    </div>
  );
}

export default PrijavaSvePrijave;
