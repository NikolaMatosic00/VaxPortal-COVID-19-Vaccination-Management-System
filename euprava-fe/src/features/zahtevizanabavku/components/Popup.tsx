import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles/Popup.css";
import { odbijZahtev, vratiZahtev } from "../ZahtevSlice";

function Popup(props: any) {
  const [porukaAdmina, setPorukaAdmina] = useState("");

  const dispatch = useDispatch();

  const procesuriajZahtev = () => {
    let obj = { imeVakcine: props.vakcina, porukaAdmina: porukaAdmina };

    props.razlogKlika == "odbijanje"
      ? dispatch(odbijZahtev(obj))
      : dispatch(vratiZahtev(obj));
  };

  return (
    <div className="glavni">
      <button className="btnX" onClick={() => props.setPopupTrigger1(false)}>
        x
      </button>
      <textarea
        placeholder={
          props.razlogKlika == "odbijanje"
            ? "Unesite razlog odbijanja"
            : "Unesite poruku za medicinsko osoblje"
        }
        rows={10}
        cols={40}
        onChange={(e) => setPorukaAdmina(e.target.value)}
      />
      <button onClick={procesuriajZahtev}>Posalji</button>
    </div>
  );
}

export default Popup;
