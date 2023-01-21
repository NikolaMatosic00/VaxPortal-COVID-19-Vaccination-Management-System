import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Zahtev } from "../models/Zahtev";
import { odobriZahtev } from "../ZahtevSlice";
import Popup from "./Popup";
import PopupZaKolicinu from "./PopupZaKolicinu";
import "./styles/Zahtev.css";

function ZahtevComponent(props: Zahtev) {
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [popupZaKolicinuTrigger, setPopupZaKolicinuTrigger] = useState(false);
  const [prikaziRazlogPoruku, setPrikaziRazlogPoruku] = useState(false);
  const [odbijanjeIzmena, setOdbijanjeIzmena] = useState("");

  const dispatch = useDispatch();

  const odobravanjeZahteva = () => {
    let obj = { imeVakcine: props.vakcina, kolicina: props.kolicina };
    dispatch(odobriZahtev(obj));
  };

  const odbijanjeKliknuto = () => {
    setPopupTrigger(true);
    setOdbijanjeIzmena("odbijanje");
  };

  const vracanjeKliknuto = () => {
    setPopupTrigger(true);
    setOdbijanjeIzmena("promeni");
  };

  const izmenaKliknuta = () => {
    setPopupZaKolicinuTrigger(true);
  };
  {
    // /* <div className="porukica">{props.porukaAdministratora}</div> */
  }
  return (
    <div className="glavni_div_za_pojedinacan_zahtev">
      {localStorage.getItem("token") === "ROLE_MEDICINSKO_OSOBLJE" &&
      props.status == "VRACENA_NA_REVIZIJU" &&
      prikaziRazlogPoruku ? (
        <div className="porukica">{props.porukaAdministratora}</div>
      ) : (
        ""
      )}
      {localStorage.getItem("token") === "ROLE_MEDICINSKO_OSOBLJE" &&
      props.status == "ODBIJENA" &&
      prikaziRazlogPoruku ? (
        <div className="porukica">{props.porukaAdministratora}</div>
      ) : (
        ""
      )}
      {localStorage.getItem("token") === "ROLE_ADMIN" &&
      props.status == "NA_CEKANJU" &&
      prikaziRazlogPoruku ? (
        <div className="porukica">{props.razlog}</div>
      ) : (
        ""
      )}
      <div
        onClick={() => setPrikaziRazlogPoruku(!prikaziRazlogPoruku)}
        className="zahtev_kartica"
        style={
          props.status == "ODOBRENA"
            ? { backgroundColor: "#7fffd40f" }
            : props.status == "ODBIJENA"
            ? { backgroundColor: "#fc3d0318" }
            : props.status == "VRACENA_NA_REVIZIJU"
            ? { backgroundColor: "#e0e4f3" }
            : {}
        }
      >
        <h3>{props.vakcina}</h3>
        <h4>{props.kolicina}</h4>
        <h5>Status: {props.status}</h5>
        {localStorage.getItem("token") === "ROLE_ADMIN" &&
        props.status == "NA_CEKANJU" ? (
          <div className="zahtev_kartica_butoni">
            <button
              className="zahtev_kartica_butoni_odobri"
              onClick={odobravanjeZahteva}
            >
              Odobri
            </button>
            <button
              className="zahtev_kartica_butoni_odbij"
              onClick={odbijanjeKliknuto}
            >
              Odbij
            </button>
            {popupTrigger == true ? (
              <Popup
                vakcina={props.vakcina}
                setPopupTrigger1={setPopupTrigger}
                razlogKlika={odbijanjeIzmena}
              />
            ) : (
              ""
            )}

            <button
              className="zahtev_kartica_butoni_vrati"
              onClick={vracanjeKliknuto}
            >
              Vrati na reviziju
            </button>
          </div>
        ) : (
          ""
        )}

        {localStorage.getItem("token") === "ROLE_MEDICINSKO_OSOBLJE" &&
        props.status == "VRACENA_NA_REVIZIJU" ? (
          <button
            className="zahtev_kartica_butoni_izmeni"
            onClick={izmenaKliknuta}
          >
            Izmeni
          </button>
        ) : (
          ""
        )}
        {popupZaKolicinuTrigger == true ? (
          <PopupZaKolicinu
            vakcina={props.vakcina}
            setPopupZaKolicinuTrigger1={setPopupZaKolicinuTrigger}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ZahtevComponent;
