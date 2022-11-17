import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Datatable } from "./pages/datatable";
import { Usuarios } from "./pages/usuarios";
import { Demo } from "./pages/demo";
import { AtencionMedica } from "./pages/atencionMedica";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./component/login";
import { Expediente } from "./component/expediente";




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
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Usuarios />} path="/usuarios" />
                        <Route element={<Datatable />} path="/datatable" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Expediente/>} path="/expediente"/>
                        <Route element={<AtencionMedica/>} path = "/atencion-medica"/>
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
