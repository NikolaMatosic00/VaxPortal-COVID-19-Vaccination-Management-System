import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store";
import { dobaviPoslednji } from "../DnevniIzvestajSlice";
import { DnevniIzvestaj } from "../models/DnevniIzvestaj";
import "./styles/DnevniIzvestaj.css";

function DnevniIzvestajComponent() {
  const getPoslednjiIzvestaj = useSelector(
    (state: RootState) => state.dnevni.najskoriji
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dobaviPoslednji());
  }, []);

  return (
    <div className="dnevni_izvestaj_kartica">
      {localStorage.getItem("token") === "ROLE_ADMIN" ? (
        <button className="dnevni_izvestaj_kartica_btn_dodaj_novu">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"../novidnevni"}
          >
            Novi
          </Link>
        </button>
      ) : (
        ""
      )}
      <div className="dnevni_izvestaj_kartica_zaglavlje">
        <h3>Dnevni izvestaj</h3>
        <span>
          {getPoslednjiIzvestaj.datumVremeObjavljivanja.replace("T", " ")}
        </span>
      </div>
      <div className="dnevni_izvestaj_podaci">
        <div className="dnevni_izvestaj_podaci_u_poslednjem_danu">
          <h4>U poslednja 24h</h4>
          <h5>obolelih: {getPoslednjiIzvestaj.brojObolelihUPoslednjemDanu}</h5>
          <h5>
            testiranih: {getPoslednjiIzvestaj.brojTestiranihUPoslednjemDanu}
          </h5>
        </div>
        <div className="dnevni_izvestaj_podaci_ostalo">
          <h5>
            obolelih od pocetka pandemije:{" "}
            {getPoslednjiIzvestaj.brojObolelihOdPocetkaPandemije}
          </h5>
          <h5>
            trenutno hospitalizovano:{" "}
            {getPoslednjiIzvestaj.brojHospitalizovanih}
          </h5>
          <h5>
            trenutno na respiratorima:{" "}
            {getPoslednjiIzvestaj.brojNaRespiratorima}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default DnevniIzvestajComponent;
