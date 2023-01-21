import React, { useEffect, useState } from "react";
// import "./styles/VestNova.css";
import { useDispatch, useSelector } from "react-redux";
import { dobaviImenaVackina, kreirajZahtev } from "../ZahtevSlice";
import { Zahtev } from "../models/Zahtev";
import { RootState } from "../../../store";

const ZahtevNovi = () => {
  const [zahtevInfo, setZahtevInfo] = useState({
    vakcina: "",
    kolicina: 0,
    razlog: "",
  });
  const dispatch = useDispatch();
  const imenaVakcina = useSelector(
    (state: RootState) => state.zahtevi.imenaVakcina
  );
  const handleFormInputChange = (name: string) => (event: any) => {
    const unesenaVrednost = event.target.value;
    setZahtevInfo({ ...zahtevInfo, [name]: unesenaVrednost });
  };

  const napravi = () => {
    let ok = true;
    if (
      zahtevInfo.vakcina === "" ||
      zahtevInfo.kolicina < 1 ||
      zahtevInfo.razlog === ""
    ) {
      ok = false;
      alert("Neka polja nisu popunjena");
    }

    if (ok) {
      dispatch(
        kreirajZahtev(
          new Zahtev(zahtevInfo.vakcina, zahtevInfo.kolicina, zahtevInfo.razlog)
        )
      );
    }
  };

  useEffect(() => {
    dispatch(dobaviImenaVackina());
    alert("Ne salji dva puta zahtev za istu vakcinu");
  }, []);

  return (
    <div className="registracija_counainer">
      <h2 className="nova_vest_naslov">Novi Zahtev</h2>
      <div className="novi_dnevni_kartica">
        <select
          name="vakcine"
          id="drzave_pretraga_vakcina"
          onChange={handleFormInputChange("vakcina")}
        >
          <option value="">--Vakcina--</option>
          {imenaVakcina.map((ime, i) => {
            return (
              <option value={ime} key={i}>
                {ime}
              </option>
            );
          })}
        </select>
        <input
          type="number"
          min={1}
          placeholder="kolicina"
          onChange={handleFormInputChange("kolicina")}
        />
        <input
          type="text"
          placeholder="Razlog nabavke"
          onChange={handleFormInputChange("razlog")}
        />

        <button onClick={napravi}>Postavi</button>
      </div>
    </div>
  );
};

export default ZahtevNovi;
