import React, { useContext } from "react";
import { Context } from "../store/appContext";
import AboutUs from "../component/aboutUs";
import ContactUs from "../component/contactUs";
import "../../styles/home.css";
import { Login } from "../component/login";
import { Cards } from "../component/cards";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div>
        <Login />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <AboutUs />
        <div>
          <ContactUs />
        </div>
      </div>
    </div>
  );
};
