import React, { useState } from "react";

export const AtencionMedica = () => {
  return (
    <>
  <div className="container-fluid">  
      <div>
        <h3 className="d-flex  mx-5 mt-3">NUEVA ATENCION</h3>
        <div>
          <h4 className="d-flex  mx-5 mt-3">Bruno || Gato ninja || Edad </h4>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              FICHA DE ATENCION
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              VACUNA
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              DESPARASITACION
            </a>
          </li>
        </ul>
        <div className="container">
          <div className="row justify-content-start">
            <h5 className="col-3 float-left">Peso:</h5>
            <h5 className="col-3 float-left">Fecha:</h5>
          </div>
        </div>
      </div>
      <div className="row justify-content-around">
        <div className="col">
      <div className="row">
        <form className="col-md-6">
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">
              <strong>Motivo de consulta</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Your Message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">
              <strong>Diagnostico</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Your Message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">
              <strong>Examenes</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Your Message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">
              <strong>Tratamiento</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Your Message"
            />
          </div>
        </form>
        <>
        </>
      </div>
      <div className="form-check ps-5">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue=""
          id="defaultCheck1"
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
          Internamiento
        </label>
      </div>
      <div className="container text-center">
        <div className="">
          <button type="button" className="btn btn-primary ">
            Guardar
          </button>
          <button type="button" className="btn btn-link ">
            Cancelar
          </button>
        </div>
      </div>
      </div>
      <div className="col-5">
    <div className="row justify-content-end" >
      <div className="col">
        <div>
          <h5>NUEVA VACUNA:</h5>
          <div className="card-body container">
            <div className="row align-items-star">
            <p className="col">Peso</p>
            <p className="col">Tipo</p>
            <p className="col">Marca</p>
            <p className="col">Fecha Aplicacion</p>
            <p className="col">Siguiente aplicacion</p>
            </div>


          <div className="container text-center">
            <button type="button" className="btn btn-primary ">
              Guardar
            </button>
            <button type="button" className="btn btn-link ">
              Cancelar
            </button>
           </div> 
          </div>
        </div>
      </div>

      <span>

      </span>

      <div className="col">
        <div>
          <h5>NUEVA DESPARASITACION:</h5>
          <div className="card-body container">
          <div className="row align-items-star">
            <p className="col">Peso</p>
            <p className="col">Tipo</p>
            <p className="col">Marca</p>
            <p className="col">Fecha Aplicacion</p>
            <p className="col">Siguiente aplicacion</p>
            </div>
          
          <div className="container text-center">   
            <button type="button" className="btn btn-primary">
              Guardar
            </button>
            <button type="button" className="btn btn-link ">
              Cancelar
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    </div>
  </div>  
    </>
  );
};
