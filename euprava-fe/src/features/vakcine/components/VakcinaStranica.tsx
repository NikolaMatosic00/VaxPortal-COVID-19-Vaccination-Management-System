import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import "./styles/VakcinaStranica.css";

function VakcinaStranica() {
  const vakcinaZaPrikaz = useSelector(
    (state: RootState) => state.vakcine.vakcinaZaPrikaz
  );
  return (
    <div className="kartica_prikaz_vakcine">
      <h2 className="ime_vakcine">{vakcinaZaPrikaz.ime}</h2>
      <div className="podaci_o_vakcini_i_proizvodjacu">
        <div className="leva_strana">
          <h4>Dostupna Količina</h4>
          <h5>{vakcinaZaPrikaz.dostupnaKolicina}</h5>
        </div>
        <div className="desna_strana">
          <h4>Proizvodjač: {vakcinaZaPrikaz.imeProizvodjaca}</h4>
          <h5>{vakcinaZaPrikaz.drzavaProizvodjaca}</h5>
        </div>
      </div>
    </div>
  );
}

export default VakcinaStranica;
