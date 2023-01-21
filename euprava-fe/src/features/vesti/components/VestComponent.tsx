import React from "react";
import { Vest } from "../models/Vest";
import "./styles/Vest.css";

function VestComponent(props: Vest) {
  return (
    <div className="vest_kartica">
      <div className="vest_kartica_zaglavlje">
        <h3>{props.naziv}</h3>
        <span>{props.datumVremeObjavljivanja.replace("T", " ")}</span>
      </div>
      <p className="vest_kartica_paragraf">{props.sadrzaj}</p>
    </div>
  );
}

export default VestComponent;
