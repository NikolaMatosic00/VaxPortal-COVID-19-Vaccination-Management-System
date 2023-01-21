import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {
  getKorisnikByCredentialsSaga,
  registrujKorisnikaSaga,
  sacuvajizmeneSaga,
} from "./features/korisnici/KorisnikSaga";

import { getSveVestiSaga, kreirajVestSaga } from "./features/vesti/VestSaga";
import {
  getPoslednjiSaga,
  kreirajDnevniSaga,
} from "./features/dnevni/DnevniizvestajSaga";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  dobaviDrzaveProizvodjacaSaga,
  dobaviVakcinuZaPrikazSaga,
  getSveTrenutneVakcineSaga,
  // getSveVakcineSaga,
  kreirajVakcinuSaga,
} from "./features/vakcine/VakcinaSaga";
import {
  dobaviImenaVackinaSaga,
  getSveZahteveSaga,
  kreirajZahtevSaga,
  odbijZahtevSaga,
  odobriZahtevSaga,
  promeniZahtevSaga,
  vratiZahtevSaga,
} from "./features/zahtevizanabavku/ZahtevSaga";
import {
  kreirajPrijavuSaga,
  otkaziPrijavuSaga,
  ucitajSveKorisnikovePrijaveSaga,
  ucitajSvePrijaveSaga,
} from "./features/prijavezavakcinu/PrijavaSaga";
import {
  dajVakcinuiSaga,
  getSvePrimljenaVakcinaeSaga,
} from "./features/primljenevakcine/PrimljenaSaga";

const persistConfig = {
  key: "persist-key",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [saga],
});

export const persistor = persistStore(store);

saga.run(getKorisnikByCredentialsSaga);
saga.run(registrujKorisnikaSaga);
saga.run(sacuvajizmeneSaga);

saga.run(getSveVestiSaga);
saga.run(kreirajVestSaga);

saga.run(getPoslednjiSaga);
saga.run(kreirajDnevniSaga);

saga.run(getSveTrenutneVakcineSaga);
saga.run(dobaviVakcinuZaPrikazSaga);
saga.run(kreirajVakcinuSaga);
saga.run(dobaviImenaVackinaSaga);
saga.run(dobaviDrzaveProizvodjacaSaga);

saga.run(getSveZahteveSaga);
saga.run(kreirajZahtevSaga);
saga.run(odobriZahtevSaga);
saga.run(odbijZahtevSaga);
saga.run(vratiZahtevSaga);
saga.run(promeniZahtevSaga);

saga.run(ucitajSvePrijaveSaga);
saga.run(kreirajPrijavuSaga);
saga.run(otkaziPrijavuSaga);
saga.run(ucitajSveKorisnikovePrijaveSaga);

saga.run(dajVakcinuiSaga);
saga.run(getSvePrimljenaVakcinaeSaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
