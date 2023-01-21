import "./styles/SveVakcine.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  dobaviDrzaveProizvodjaca,
  promeniKriterijume,
  resetujKriterijume,
  ucitajTrenutnoPrikazaneVakcine,
} from "../VakcinaSlice";
import { RootState } from "../../../store";
import VakcinaComponent from "./VakcinaComponent";

export const SveVakcine = () => {
  const dispatch = useDispatch();

  const getSveTrenutneVakcine = useSelector(
    (state: RootState) => state.vakcine.trenutnoPrikazaneVakcine
  );
  const drzaveProizvodjaca = useSelector(
    (state: RootState) => state.vakcine.drzaveProizvodjaca
  );
  const handleFormInputChange = (naziv: string) => (event: any) => {
    const vrednost = event.target.value;
    dispatch(promeniKriterijume({ naziv, vrednost }));
  };

  useEffect(() => {
    dispatch(resetujKriterijume());
    dispatch(ucitajTrenutnoPrikazaneVakcine());
    dispatch(dobaviDrzaveProizvodjaca());
  }, []);

  return (
    <div className="sve_vakcine_kontejner">
      <div className="sve_vakcine_kontejner_header">
        <input
          type="text"
          placeholder="Vakcina"
          onChange={handleFormInputChange("naziv")}
        />
        <input
          type="text"
          placeholder="Proizvodjac"
          onChange={handleFormInputChange("imeProizvodjaca")}
        />
        <input
          type="number"
          placeholder="min"
          onChange={handleFormInputChange("minKolicina")}
        />
        <input
          type="number"
          placeholder="max"
          onChange={handleFormInputChange("maxKolicina")}
        />
        <select
          name="drzave"
          id="drzave_pretraga_vakcina"
          onChange={handleFormInputChange("drzava")}
        >
          <option value="">--Drzava--</option>
          {drzaveProizvodjaca.map((drzava, i) => {
            return (
              <option value={drzava} key={i}>
                {drzava}
              </option>
            );
          })}
        </select>
        <select
          name="sortiranje"
          id="sortiranje_pretraga_vakcine"
          onChange={handleFormInputChange("sort")}
        >
          <option value="">--sortiranje--</option>
          <option value="kolicina">Kolicina</option>
          <option value="naziv">Ime Vakcine</option>
        </select>
        <button onClick={() => dispatch(ucitajTrenutnoPrikazaneVakcine())}>
          Pretrazi
        </button>
      </div>
      <div></div>
      <div className="sve_vakcine_kontejner_body">
        {getSveTrenutneVakcine.map((vakcina, i) => {
          return <VakcinaComponent {...vakcina} key={i} />;
        })}
      </div>
    </div>
  );
};
