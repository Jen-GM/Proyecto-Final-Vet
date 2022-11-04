import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Cards = () => {
  return (
    <div>
  <h1 className="text-center mt-5 ">Beneficios</h1>
  <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center h-100">
  <div classname="card" style={{ width: "18rem" }}>
    <img src="..." classname="card-img-top" alt="..." />
    <div classname="card-body">
      <h5 classname="card-title">Beneficio 1</h5>
      <p classname="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra
        pulvinar arcu eu gravida. Curabitur elementum dui congue eros vehicula
        ultricies vitae id turpis.
      </p>
      <a href="#" classname="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
  <div classname="card" style={{ width: "18rem" }}>
    <img src="..." classname="card-img-top" alt="..." />
    <div classname="card-body">
      <h5 classname="card-title">Beneficio 2</h5>
      <p classname="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra
        pulvinar arcu eu gravida. Curabitur elementum dui congue eros vehicula
        ultricies vitae id turpis.
      </p>
      <a href="#" classname="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
  <div classname="card" style={{ width: "18rem" }}>
    <img src="..." className="card-img-top" alt="..." />
    <div classname="card-body">
      <h5 classname="card-title">Beneficio 3</h5>
      <p classname="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra
        pulvinar arcu eu gravida. Curabitur elementum dui congue eros vehicula
        ultricies vitae id turpis.
      </p>
      <a href="#" classname="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
  <div classname="card" style={{ width: "18rem" }}>
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Beneficio 4</h5>
      <p className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra
        pulvinar arcu eu gravida. Curabitur elementum dui congue eros vehicula
        ultricies vitae id turpis.
      </p>
      <a href="#" classname="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
  </div>
</div>


  );
};
