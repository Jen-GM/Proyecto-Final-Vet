import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Datatable } from "./pages/datatable";
import { Datatable2 } from "./pages/datatable2.js";
import { Usuarios } from "./pages/usuarios";
import { AtencionMedica } from "./pages/atencionMedica";
import { VistaCliente } from "./pages/vistaCliente";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./component/login";
import { Expediente } from "./component/expediente";
import EventCalendar from "./pages/EventCalendar";
import { Vacunacionydesparasitacion } from "./component/vacunacionydesparasitacion";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Profile />} path="/editarperfil" />
            <Route element={<Usuarios />} path="/usuarios" />
            <Route element={<Datatable />} path="/usuarios" />
            <Route element={<Datatable2 />} path="/mascotas" />
            <Route element={<EventCalendar />} path="/agenda" />
            <Route element={<VistaCliente />} path="/cliente" />
            <Route element={<Expediente />} path="/expediente" />
            <Route element={<AtencionMedica />} path="/atencionmedica" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
