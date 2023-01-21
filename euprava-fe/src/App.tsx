import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./common/components/NavbarComponent";
import FooterComponent from "./common/components/FooterComponent";
import LoginComponent from "./features/korisnici/components/LoginComponent";
import RegistracijaComponent from "./features/korisnici/components/RegistracijaComponent";
import VestPageComponent from "./features/vesti/components/VestPageComponent";
import VestNovaComponent from "./features/vesti/components/VestNovaComponent";
import MojProfilComponent from "./features/korisnici/components/MojProfilComponent";
import NoviDnevniIzvestaj from "./features/dnevni/components/NoviDnevniIzvestaj";
import { SveVakcine } from "./features/vakcine/components/SveVakcine";
import VakcinaStranica from "./features/vakcine/components/VakcinaStranica";
import ZahteviPageComponent from "./features/zahtevizanabavku/components/ZahteviPageComponent";
import ZahtevNovi from "./features/zahtevizanabavku/components/ZahtevNovi";
import PrijavaSvePrijave from "./features/prijavezavakcinu/components/PrijavaSvePrijave";
import PrijavaNova from "./features/prijavezavakcinu/components/PrijavaNova";
import PrimljeneIPrijave from "./features/primljenevakcine/components/PrimljeneIPrijave";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/registracija" element={<RegistracijaComponent />} />
        <Route path="/vesti" element={<VestPageComponent />} />
        <Route path="/novavest" element={<VestNovaComponent />} />
        <Route path="/profil" element={<MojProfilComponent />} />
        <Route path="/novidnevni" element={<NoviDnevniIzvestaj />} />
        <Route path="/vakcine" element={<SveVakcine />} />
        <Route path="/pregledvakcine" element={<VakcinaStranica />} />
        <Route path="/zahtevizanabavku" element={<ZahteviPageComponent />} />
        <Route path="/novizahtev" element={<ZahtevNovi />} />
        <Route path="/prijave" element={<PrijavaSvePrijave />} />
        <Route path="/prijavazavakcinu" element={<PrijavaNova />} />
        <Route path="/korisnikovevakcine" element={<PrimljeneIPrijave />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
