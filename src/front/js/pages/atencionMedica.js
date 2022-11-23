import React, { useState } from "react";
import "../../styles/index.css";

export const AtencionMedica = () => {
  return (
    
        <>
   <div className="m-1 p-1 border w-50 d-flex justify-content-between">
  <nav className="nav-ficha border d-inline">
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
      <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">FICHA DE ATENCION</button>
      <button className="nav-link d-block " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">VACUNA</button>
      <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">DESPARASITACION</button>
    </div>
  </nav>
  <div className="tab-content p-3" id="nav-tabContent">
    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  <div>
  <div className="row g-2 align-items-center w-90">
  <div className="col-auto">
    <label htmlFor="inputText" className="col-form-label">Peso</label>
  </div>
  <div className="col-sm-3">
    <input type="text" id="inputText" className="form-control" aria-describedby="passwordHelpInline" />
  </div>
  <div className="col-auto mx-2">
    <label htmlFor="inputText" className="col-form-label">Fecha</label>
  </div>
  <div className="col-sm-4">
  <div className="input-group date" id="datepicker">
        <span className="input-group-append">
        <span className="input-group-text bg-light d-block">
          <i className="fa fa-calendar" />
        </span>
      </span>
    </div>
  </div>
  <div className="form-floating px-1 ">
  <textarea className="form-control " placeholder="Leave a comment here" id="floatingTextarea" defaultValue={""} />
  <label htmlFor="floatingTextarea">Motivo de la consulta</label>
</div>
  <div className="form-floating px-1 w-90">
  <textarea className="form-control " placeholder="Leave a comment here" id="floatingTextarea" defaultValue={""} />
  <label htmlFor="floatingTextarea">Diagnóstico</label>
</div>
  <div className="form-floating px-1 w-90">
  <textarea className="form-control " placeholder="Leave a comment here" id="floatingTextarea" defaultValue={""} />
  <label htmlFor="floatingTextarea">Exámenes</label>
</div>
  <div className="form-floating py-2 w-90">
  <textarea className="form-control " placeholder="Leave a comment here" id="floatingTextarea" defaultValue={""} />
  <label htmlFor="floatingTextarea">Tratamiento</label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
   Internamiento
  </label>
</div>
<div className="mx-3">
  <button type="button my-2" className="btn btn-success">Guardar</button>
  <button type="button my-2" className="btn btn-outline-success">Cancelar</button>

</div>


  <div className="col-auto">
   
  </div>
</div>

  </div>

    </div>
    {/* VACUNACION TAB */}
    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
    <form className="row g-4">
  <div className="col-md-3">
    <label htmlFor="inputEmail4" className="form-label">Peso</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputEmail4" className="form-label">Tipo</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputEmail4" className="form-label">Marca</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  
  <div className="col-auto">
    <label htmlFor="inputText" className="col-form-label">Fecha aplicación</label>
  </div>
  <div className="col-md-1 ">
  <div className="input-group date" id="datepicker">
      
      <span className="input-group-append">
        <span className="input-group-text bg-light d-block">
          <i className="fa fa-calendar" />
        </span>
      </span>
    </div>
  </div>
  <div className="col-auto">
    <label htmlFor="inputText" className="col-form-label my-1">Sig. aplicación</label>
  </div>
  <div className="col-md-1 ">
  <div className="input-group date" id="datepicker">
      
      <span className="input-group-append">
        <span className="input-group-text bg-light d-block">
          <i className="fa fa-calendar" />
        </span>
      </span>
    </div>
  </div>
 
  
       
</form>


<div className="mx-3">
  <button type="button my-2" className="btn btn-success">Guardar</button>
  <button type="button my-2" className="btn btn-outline-success">Cancelar</button>
  

</div>


      </div>


    {/* /*DESPARASITACION TAB */}
    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
    <form className="row">
  <div className="col-md-3">
    <label htmlFor="inputEmail4" className="form-label">Peso</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputEmail4" className="form-label">Marca</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  
  <div className="col-auto">
    <label htmlFor="inputText" className="col-form-label">Fecha aplicación</label>
  </div>
  <div className="col-md-1 ">
  <div className="input-group date" id="datepicker">
      
      <span className="input-group-append">
        <span className="input-group-text bg-light ">
          <i className="fa fa-calendar" />
        </span>
      </span>
    </div>
  </div>
  <div className="col-auto">
    <label htmlFor="inputText" className="col-form-label"> Sig.aplicación</label>
  </div>
  <div className="col-md-1 ">
  <div className="input-group date" id="datepicker">
      
      <span className="input-group-append">
        <span className="input-group-text bg-light ">
          <i className="fa fa-calendar" />
        </span>
      </span>
    </div>
    </div>
  
 
  
       
</form>
<div className="p-3">
  <button type="button my-2" className="btn btn-success">Guardar</button>
  <button type="button my-2" className="btn btn-outline-success">Cancelar</button>

</div>
      </div>
  </div>
  <div className="col-md-1 "> <img src="https://media1.giphy.com/media/W8nu2VD6Hd3DpQLDTy/giphy.gif"></img></div>
</div>


</>
     
  );
};



