import React from "react";
import "../../styles/profile.css";

export const Profile = () => {
  return (
    <>
     <div className="container mt-2 ">
  <div className="card p-1 text-center">
    <div className="d-flex flex-row justify-content-center mb-1">
      <div className="image shadow-sm">
        {" "}
        
        <span>
       
        </span>{" "}
      </div>
     
    </div>
    <h4>Editar Perfil</h4>
    <div className="row">
      <div className="col-md-3">
      <div className="d-flex flex-column ms-3">
      <img
          src="https://i0.wp.com/twoplusdogs.co.uk/wp-content/uploads/2020/12/dog-food.jpg?w=664&ssl=1"
          className="img-thumbnail shadow-sm p-3 mb-5 bg-body rounded"
        />{" "}
        
      </div>
  
      </div>
      
      <div className="col-md-4">
        <div><br/></div>
      <div className="form-floating mb-4">
  <input
    type="email"
    className="form-control"
    id="floatingInput"
    placeholder="name@example.com"
  />
  <label htmlFor="floatingInput">Nombre Completo</label>
</div>
<div className="col-md-12">
      <div className="form-floating mb-4">
  <input
    type="email"
    className="form-control"
    id="floatingInput"
    placeholder="name@example.com"
  />
  <label htmlFor="floatingInput">Correo</label>
</div>
      </div>
      <div className="col-md-12">
      <div className="form-floating mb-3">
  <input
    type="text"
    className="form-control"
    id="floatingInput"
    placeholder="name@example.com"
  />
  <label htmlFor="floatingInput">Direccion</label>
</div>
      </div>
      <div className="col-md-12">
      <div className="form-floating mb-5">
  <input
    type="text"
    className="form-control"
    id="floatingInput"
    placeholder="name@example.com"
  />
  <label htmlFor="floatingInput">Telefono</label>
</div>
      </div>
      </div>
      
      
           
    </div>
    
    <div className="mt-3 d-grid gap-2 d-flex justify-content-center">
      {" "}
      <button className="px-3 btn btn-lg btn-outline-primary">
        Cancel
      </button>{" "}
      <button className="px-3 btn btn-lg btn-primary">Save</button>{" "}
    </div>
  </div>
</div>


    </>
  );
};
