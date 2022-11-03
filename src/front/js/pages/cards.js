import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Cards = () => {
  return (
    <div>
      <h1>Beneficios</h1>
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Beneficio 1</h5>
          <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra pulvinar arcu eu gravida. Curabitur elementum dui congue eros vehicula ultricies vitae id turpis.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Beneficio 2</h5>
          <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra pulvinar arcu eu gravida. Curabitur elementum dui congue eros vehicula ultricies vitae id turpis.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Beneficio 3</h5>
          <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra pulvinar arcu eu gravida. Curabitur elementum dui congue eros vehicula ultricies vitae id turpis.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">CBeneficio 4</h5>
          <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra pulvinar arcu eu gravida. Curabitur elementum dui congue eros vehicula ultricies vitae id turpis.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
