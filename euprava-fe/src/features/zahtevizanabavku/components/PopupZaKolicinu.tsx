import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles/Popup.css";
import { promeniZahtev } from "../ZahtevSlice";

function PopupZaKolicinu(props: any) {
  const [kolicina, setKolicina] = useState(0);

  const dispatch = useDispatch();

  const procesuriajZahtev = () => {
    let obj = { imeVakcine: props.vakcina, kolicina: kolicina };
    dispatch(promeniZahtev(obj));
  };

  return (
    <div className="glavni">
      <button
        className="btnX"
        onClick={() => props.setPopupZaKolicinuTrigger1(false)}
      >
        x
      </button>
      <input
        type="number"
        placeholder="unesite novu kolicinu"
        onChange={(e) => setKolicina(Number(e.target.value))}
      />
      <button onClick={procesuriajZahtev}>Posalji</button>
    </div>
  );
}

export default PopupZaKolicinu;
