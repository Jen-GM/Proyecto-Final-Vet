import React, { Component } from "react";

export const Footer = () => (
  <>
    {/* Footer */}
    <footer className="text-center text-lg-start text-white mt-3">
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5 pt-1">
          {/* Grid row */}
          <div className="row mt-5">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-3">
              {/* Content */}
              <img
                src="LogotipoPS.png"
                alt="Logo"
                width="150"
                height="140"
                className="d-inline-block align-text-top"
              />
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Servicios</h6>
              <p className="text-reset">Instalación del software</p>
              <p className="text-reset">Soporte del software</p>
            </div>

            <div className="col-md-1 col-lg-1 col-xl-3 mx-auto mb-md-0 mb-1">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-3">Contactenos</h6>
              <p>
                <i className="fas fa-home me-2" /> San Jose, CR 10012
              </p>
              <p>
                <i className="fas fa-envelope me-2" />
                petsource@4geeks.com
              </p>
              <p>
                <i className="fas fa-phone me-2" /> +01 234 567 88
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-1" style={{ backgroundColor: "white" }}>
        {" "}
        2022 <a className="text-reset fw-bold">© Petsource</a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </>
);
