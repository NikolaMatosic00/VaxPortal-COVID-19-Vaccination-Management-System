import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store";
import { ucitajSveZahteve } from "../ZahtevSlice";
import Zahtev from "./ZahtevComponent";

function ZahteviPageComponent() {
  const getSviZahtevi = useSelector(
    (state: RootState) => state.zahtevi.sviZahtevi
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ucitajSveZahteve());
  }, []);

  return (
    <div className="vesti_stranica">
      {localStorage.getItem("token") === "ROLE_MEDICINSKO_OSOBLJE" ? (
        <button className="vesti_stranica_btn_dodaj_novu">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"../novizahtev"}
          >
            Novi
          </Link>
        </button>
      ) : (
        ""
      )}

      <h2>Zahtevi za nabavku</h2>
      <div>
        {getSviZahtevi.map((vest, i) => {
          return <Zahtev {...vest} key={i} />;
        })}
      </div>
    </div>
  );
}

export default ZahteviPageComponent;
