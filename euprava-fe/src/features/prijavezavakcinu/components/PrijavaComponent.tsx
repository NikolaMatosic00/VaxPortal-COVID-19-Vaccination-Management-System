import React from "react";
import { useDispatch } from "react-redux";
import { PrimljenaVakcina } from "../../primljenevakcine/models/PrimljenaVakcina";
import { dajVakcinui } from "../../primljenevakcine/PrimljenaSlice";
import { Prijava } from "../models/Prijava";

function PrijavaComponent(props: Prijava) {
  const dispatch = useDispatch();

  const salji = () => {
    let obj: PrimljenaVakcina = {
      pacijentJMBG: props.pacijentJMBG,
      vakcina: props.vakcina,
    };

    dispatch(dajVakcinui(obj));
  };

  return (
    <div className="zahtev_kartica">
      <h3>{props.prezime}</h3>
      <h4>{props.pacijentJMBG}</h4>
      <h5>{props.vakcina}</h5>

      <div className="zahtev_kartica_butoni">
        <button className="zahtev_kartica_butoni_odobri" onClick={salji}>
          Daj Vakcinu
        </button>
      </div>
    </div>
  );
}

export default PrijavaComponent;
