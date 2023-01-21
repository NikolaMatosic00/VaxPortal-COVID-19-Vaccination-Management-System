import { combineReducers } from "redux";
import korisnici from "./features/korisnici/KorisnikSlice";
import vesti from "./features/vesti/VestSlice";
import dnevni from "./features/dnevni/DnevniIzvestajSlice";
import vakcine from "./features/vakcine/VakcinaSlice";
import zahtevi from "./features/zahtevizanabavku/ZahtevSlice";
import prijave from "./features/prijavezavakcinu/PrijavaSlice";
import primljene from "./features/primljenevakcine/PrimljenaSlice";

export default combineReducers({
  korisnici,
  vesti,
  dnevni,
  vakcine,
  zahtevi,
  prijave,
  primljene,
});
