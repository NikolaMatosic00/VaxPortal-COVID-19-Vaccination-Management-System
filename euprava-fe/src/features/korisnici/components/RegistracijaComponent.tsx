import React, { useState } from "react";
import "./styles/Registracija.css";
import { useDispatch } from "react-redux";
import { registrujKorisnika } from "../KorisnikSlice";
import { RegistracijaDTO } from "../models/RegistracijaDTO";

const RegistracijaComponent = () => {
  const [userInfo, setUserInfo] = useState({
    ime: "",
    prezime: "",
    datumRodjenja: "",
    jmbg: "",
    adresa: "",
    telefon: "",
    email: "",
    lozinka: "",
    ponovljena: "",
  });
  const dispatch = useDispatch();

  const handleFormInputChange = (name: string) => (event: any) => {
    const unesenaVrednost = event.target.value;
    setUserInfo({ ...userInfo, [name]: unesenaVrednost });
  };

  const napravi = () => {
    let ok = true;
    let mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (
      userInfo.ime === "" ||
      userInfo.prezime === "" ||
      userInfo.datumRodjenja === "" ||
      userInfo.email === "" ||
      userInfo.lozinka === "" ||
      userInfo.jmbg === "" ||
      userInfo.adresa === "" ||
      userInfo.telefon === "" ||
      userInfo.ponovljena === ""
    ) {
      ok = false;
      alert("Neka polja nisu popunjena");
    } else if (userInfo.lozinka.length < 7) {
      ok = false;
      alert("Lozinka mora imati minimalno 7 karaktera :)");
    } else if (userInfo.jmbg.length !== 13) {
      ok = false;
      alert("jmbg mora imati 13 cifara");
    } else if (userInfo.lozinka !== userInfo.ponovljena) {
      ok = false;
      alert("Lozinke se ne podudaraju");
    } else if (!userInfo.email.match(mailformat)) {
      ok = false;
      alert("Unesena nevazeca email adresa");
    }

    if (ok) {
      dispatch(
        registrujKorisnika(
          new RegistracijaDTO(
            userInfo.ime,
            userInfo.prezime,
            userInfo.datumRodjenja,
            userInfo.jmbg,
            userInfo.adresa,
            userInfo.telefon,
            userInfo.email,
            userInfo.lozinka
          )
        )
      );
    }
  };

  return (
    <div className="registracija_counainer">
      <h2>Registracija</h2>
      <div className="registracija_kartica">
        <input
          type="text"
          placeholder="ime"
          onChange={handleFormInputChange("ime")}
        />
        <input
          type="text"
          placeholder="prezime"
          onChange={handleFormInputChange("prezime")}
        />
        <input
          type="date"
          min="1900-03-02"
          max="2018-02-03"
          placeholder="datumRodjenja"
          onChange={handleFormInputChange("datumRodjenja")}
        />
        <input
          type="text"
          placeholder="jmbg"
          onChange={handleFormInputChange("jmbg")}
        />
        <input
          type="text"
          placeholder="adresa"
          onChange={handleFormInputChange("adresa")}
        />
        <input
          type="text"
          placeholder="telefon"
          onChange={handleFormInputChange("telefon")}
        />
        <input
          type="text"
          placeholder="email"
          onChange={handleFormInputChange("email")}
        />
        <input
          type="password"
          placeholder="lozinka"
          onChange={handleFormInputChange("lozinka")}
        />
        <input
          type="password"
          placeholder="Ponovite lozinku"
          onChange={handleFormInputChange("ponovljena")}
        />
        <button onClick={napravi}>Registruj se</button>
      </div>
    </div>
  );
};

export default RegistracijaComponent;
