import React, { useState } from "react";
import "./styles/NoviDnevniIzvestaj.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { kreirajNoviDnevniIzvestaj } from "../DnevniIzvestajSlice";
import { DnevniIzvestaj } from "../models/DnevniIzvestaj";

const NoviDnevniIzvestaj = () => {
  const [dnevniIzvestajInfo, setDnevniIzvestajInfo] = useState({
    brojObolelihUPoslednjemDanu: 0,
    brojTestiranihUPoslednjemDanu: 0,
    brojHospitalizovanih: 0,
    brojNaRespiratorima: 0,
  });
  const dispatch = useDispatch();

  const handleFormInputChange = (name: string) => (event: any) => {
    const unesenaVrednost = event.target.value;
    setDnevniIzvestajInfo({ ...dnevniIzvestajInfo, [name]: unesenaVrednost });
  };

  const napravi = () => {
    dispatch(
      kreirajNoviDnevniIzvestaj(
        new DnevniIzvestaj(
          dnevniIzvestajInfo.brojObolelihUPoslednjemDanu,
          dnevniIzvestajInfo.brojTestiranihUPoslednjemDanu,
          0,
          dnevniIzvestajInfo.brojHospitalizovanih,
          dnevniIzvestajInfo.brojNaRespiratorima,
          ""
        )
      )
    );
  };

  return (
    <div className="registracija_counainer">
      <h2 className="nova_vest_naslov">Novi Dnevni</h2>
      <div className="novi_dnevni_kartica">
        <input
          type="number"
          min={1}
          placeholder="oboleli u poslednjem danu"
          onChange={handleFormInputChange("brojObolelihUPoslednjemDanu")}
        />
        <input
          type="number"
          min={1}
          placeholder="testirani u poslednjem danu"
          onChange={handleFormInputChange("brojTestiranihUPoslednjemDanu")}
        />
        <input
          type="number"
          min={1}
          placeholder="hospitalizovanih"
          onChange={handleFormInputChange("brojHospitalizovanih")}
        />
        <input
          type="number"
          min={1}
          placeholder="na respiratorima"
          onChange={handleFormInputChange("brojNaRespiratorima")}
        />
        <button onClick={napravi}>Postavi</button>
      </div>
    </div>
  );
};

export default NoviDnevniIzvestaj;
