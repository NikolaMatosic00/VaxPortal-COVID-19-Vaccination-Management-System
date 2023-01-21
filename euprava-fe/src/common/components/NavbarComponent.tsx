import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { odjaviKorisnika } from "../../features/korisnici/KorisnikSlice";
import { ucitajSveVesti } from "../../features/vesti/VestSlice";
import "./Navbar.css";

const HeaderComponent = () => {
  let key = 1;

  const dispatch = useDispatch();

  const odjaviKorisnikaa = () => {
    localStorage.setItem("token", "");
    dispatch(odjaviKorisnika());
    window.location.assign("vesti");
  };

  const vakcine = (
    <Link className="jedan_linkIz_liste" key={key++} to="vakcine">
      Vakcine
    </Link>
  );
  const zahteviZaNabavku = (
    <Link className="jedan_linkIz_liste" key={key++} to="zahtevizanabavku">
      Zahtevi za nabavku
    </Link>
  );
  const prijaveZaVakcinu = (
    <Link className="jedan_linkIz_liste" key={key++} to="prijave">
      Prijave za vakcinu
    </Link>
  );
  const korisnikoveVakcine = (
    <Link className="jedan_linkIz_liste" key={key++} to="korisnikovevakcine">
      Moje Vakcine i Prijave
    </Link>
  );
  const prijaviVakcinu = (
    <Link className="jedan_linkIz_liste" key={key++} to="prijavazavakcinu">
      Prijavi se za vakcinu
    </Link>
  );

  let administratoroviEl = [];
  administratoroviEl.push(zahteviZaNabavku);

  let medicinskoOsobljeEl = [];
  medicinskoOsobljeEl.push(vakcine);
  medicinskoOsobljeEl.push(zahteviZaNabavku);
  medicinskoOsobljeEl.push(prijaveZaVakcinu);

  let korisnikoviEl = [];
  korisnikoviEl.push(korisnikoveVakcine);
  korisnikoviEl.push(prijaviVakcinu);

  var listaElemenataNavbara;

  if (localStorage.getItem("token")) {
    const role = localStorage.getItem("token");

    if (role === "ROLE_ADMIN") {
      listaElemenataNavbara = administratoroviEl;
    } else if (role === "ROLE_MEDICINSKO_OSOBLJE") {
      listaElemenataNavbara = medicinskoOsobljeEl;
    } else if (role === "ROLE_PACIJENT") {
      listaElemenataNavbara = korisnikoviEl;
    }
  }

  return (
    <div className="navbar">
      <div className="vesti">
        <Link to={"vesti"}>Vesti</Link>
        <ul>{listaElemenataNavbara}</ul>
      </div>

      {localStorage.getItem("token") ? (
        <div className="mojprofiliodjava">
          <Link to="profil" className="mojprofil">
            Moj Profil
          </Link>
          <button className="btn_odjava" onClick={odjaviKorisnikaa}>
            Odjava
          </button>
        </div>
      ) : (
        <div className="login">
          <Link to={"login"}>Login</Link>
        </div>
      )}
    </div>
  );
};

export default HeaderComponent;
