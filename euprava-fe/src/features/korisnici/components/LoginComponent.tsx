import React, { useState } from "react";
import "./styles/Login.css";
import { LoginDTO } from "../models/LoginDTO";
import { useDispatch } from "react-redux";
import { posaljiKredencijale } from "../KorisnikSlice";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    lozinka: "",
  });

  const handleFormInputChange = (name: string) => (event: any) => {
    const unesenaVrednost = event.target.value;
    setCredentials({ ...credentials, [name]: unesenaVrednost });
  };

  const dispatch = useDispatch();

  const napravi = () => {
    let ok = true;
    let mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (credentials.email === "" || credentials.lozinka === "") {
      ok = false;
      alert("Neka polja nisu popunjena");
    } else if (credentials.lozinka.length < 2) {
      ok = false;
      alert("Lozinka mora imati minimalno 2 karaktera :)");
    } else if (!credentials.email.match(mailformat)) {
      ok = false;
      alert("Unesena nevazeca email adresa");
    }

    if (ok) {
      dispatch(
        posaljiKredencijale(
          new LoginDTO(credentials.email, credentials.lozinka)
        )
      );
    }
  };

  // const loginnn = async () => {
  //   var dtoovac: LoginDTO = new LoginDTO(
  //     credentials.email,
  //     credentials.lozinka
  //   );
  //   const respone = await login(dtoovac);
  //   console.log(respone);
  //   localStorage.setItem("token", "ROLE_" + respone.data.uloga);
  // };

  return (
    <div className="login_counainer">
      <h2>Login</h2>
      <div className="login_kartica">
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
        <button onClick={napravi}>Uloguj se</button>
      </div>
      <button className="btn_registrujse">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"../registracija"}
        >
          Registruj se
        </Link>
      </button>
    </div>
  );
};

export default LoginComponent;
