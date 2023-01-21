import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Vakcina } from "../models/Vakcina";
import { dobaviVakcinuZaPrikaz } from "../VakcinaSlice";

function VakcinaComponent(props: Vakcina) {
  const dispatch = useDispatch();
  return (
    <div className="kartica">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={"../pregledvakcine"}
        onClick={() => dispatch(dobaviVakcinuZaPrikaz(props.ime))}
      >
        <h4>{props.ime}</h4>
      </Link>
      <span id="cifra">{props.dostupnaKolicina}</span>
      <span>{props.imeProizvodjaca}</span>
    </div>
  );
}

export default VakcinaComponent;
