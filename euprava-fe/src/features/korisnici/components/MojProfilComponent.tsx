import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { promeniUlogovanog, sacuvajIzmene } from "../KorisnikSlice";
import "./styles/MojProfil.css";

const MojProfilComponent = () => {
  const ulogovani = useSelector(
    (state: RootState) => state.korisnici.ulogovaniKorisnik
  );
  const lozinkaInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const ponovljenaInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dispatch = useDispatch();

  const handleFormInputChange = (naziv: string) => (event: any) => {
    const vrednost = event.target.value;
    dispatch(promeniUlogovanog({ naziv, vrednost }));
  };

  const promenaLozinke = () => {
    let ok = true;
    if (lozinkaInput.current.value !== ponovljenaInput.current.value) {
      ok = false;
      alert("Lozinke se ne podudaraju");
    }
    if (ok) {
      const nesto = {
        naziv: "lozinka",
        vrednost: lozinkaInput.current.value,
      };
      console.log(nesto);

      dispatch(promeniUlogovanog(nesto));
      dispatch(sacuvajIzmene());
    }
  };
  const sacuvaj = () => {
    dispatch(sacuvajIzmene());
  };

  return (
    <div className="moj_profil_counainer">
      <div className="moj_profil_neizmenljivo">
        <h2>Licni podaci</h2>
        <input type="text" value={ulogovani.datumRodjenja} readOnly />
        <input type="text" value={ulogovani.jmbg} readOnly />
        <input type="text" value={ulogovani.uloga} readOnly />
      </div>
      <div className="moj_profil_counainer_izmenljivi_podaci">
        <h2>moj profil</h2>
        <div className="moj_profil_kartica">
          <input
            type="text"
            defaultValue={ulogovani.ime}
            onChange={handleFormInputChange("ime")}
          />
          <input
            type="text"
            defaultValue={ulogovani.prezime}
            onChange={handleFormInputChange("prezime")}
          />

          <input
            type="text"
            defaultValue={ulogovani.adresa}
            onChange={handleFormInputChange("adresa")}
          />
          <input
            type="text"
            defaultValue={ulogovani.telefon}
            onChange={handleFormInputChange("telefon")}
          />
          <input
            type="text"
            defaultValue={ulogovani.email}
            onChange={handleFormInputChange("email")}
          />

          <button onClick={sacuvaj}>Sacuvaj izmene</button>
        </div>
      </div>
      <div className="moj_profil_izmeni_lozinku">
        <h2>Promeni Lozinku</h2>
        <input type="password" placeholder="lozinka" ref={lozinkaInput} />
        <input
          type="password"
          placeholder="Ponovite lozinku"
          ref={ponovljenaInput}
        />
        <button onClick={promenaLozinke}>Promeni lozinku</button>
      </div>
    </div>
  );
};

export default MojProfilComponent;
