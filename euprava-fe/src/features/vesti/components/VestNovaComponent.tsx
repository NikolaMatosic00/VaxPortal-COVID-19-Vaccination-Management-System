import React, { useState } from "react";
import "./styles/VestNova.css";
import { useDispatch, useSelector } from "react-redux";
import { kreirajVest } from "../VestSlice";
import { VestDTO } from "../models/VestDTO";
import { RootState } from "../../../store";

const VestNovaComponent = () => {
  const [vestInfo, setVestInfo] = useState({
    naziv: "",
    sadrzaj: "",
  });
  const dispatch = useDispatch();

  const handleFormInputChange = (name: string) => (event: any) => {
    const unesenaVrednost = event.target.value;
    setVestInfo({ ...vestInfo, [name]: unesenaVrednost });
  };

  const napravi = () => {
    let ok = true;
    if (vestInfo.naziv === "" || vestInfo.sadrzaj === "") {
      ok = false;
      alert("Neka polja nisu popunjena");
    } else if (vestInfo.naziv.length < 4) {
      ok = false;
      alert("Naziv mora imati minimalno 4 karaktera :)");
    } else if (vestInfo.sadrzaj.length < 10) {
      ok = false;
      alert("Sadrzaj vesti mora biti dugacak najmanje 10 karaktera");
    }

    if (ok) {
      dispatch(kreirajVest(new VestDTO(vestInfo.naziv, vestInfo.sadrzaj)));
    }
  };

  return (
    <div className="registracija_counainer">
      <h2 className="nova_vest_naslov">Nova vest</h2>
      <div className="nova_vest_kartica">
        <input
          type="text"
          placeholder="naslov"
          onChange={handleFormInputChange("naziv")}
        />
        <textarea
          placeholder="sadrzaj"
          rows={10}
          cols={70}
          onChange={handleFormInputChange("sadrzaj")}
        />

        <button onClick={napravi}>Postavi</button>
      </div>
    </div>
  );
};

export default VestNovaComponent;
