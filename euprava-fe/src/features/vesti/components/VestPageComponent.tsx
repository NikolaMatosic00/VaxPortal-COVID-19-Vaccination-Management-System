import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import VestComponent from "./VestComponent";
import "./styles/VestiPage.css";
import { ucitajSveVesti } from "../VestSlice";
import { Link } from "react-router-dom";
import DnevniIzvestajComponent from "../../dnevni/components/DnevniIzvestajComponent";

function VestPageComponent() {
  const getSveVesti = useSelector((state: RootState) => state.vesti.sveVesti);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ucitajSveVesti());
  }, []);

  return (
    <div className="vesti_stranica">
      {localStorage.getItem("token") === "ROLE_ADMIN" ? (
        <button className="vesti_stranica_btn_dodaj_novu">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"../novavest"}
          >
            Nova
          </Link>
        </button>
      ) : (
        ""
      )}

      <h2>Vesti</h2>
      <div>
        <DnevniIzvestajComponent />
        {getSveVesti.map((vest, i) => {
          return <VestComponent {...vest} key={i} />;
        })}
      </div>
    </div>
  );
}

export default VestPageComponent;
