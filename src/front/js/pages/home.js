import React, { useContext } from "react";
import { Context } from "../store/appContext";
import AboutUs from "../component/aboutUs";
import ContactUs from "../component/contactUs";
import "../../styles/home.css";
import { Login } from "../component/login";
import { Beneficios } from "../component/beneficios";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div>
        <Login />
      </div>
      <div>
        <Beneficios />
      </div>
      <div>
        <AboutUs />
        <div>
          <ContactUs />
        </div>
      </div>
      <div>
        <img
          src="navbar2.png"
          alt="Logo"
          width="270"
          height="170"
          className="fixed-bottom"
        />
      </div>
    </div>
  );
};
