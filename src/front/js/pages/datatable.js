import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import axios from "axios";
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const columnas = [
    {
        title: 'Avatar',
        field: 'id',
             
      
     },
        
 {
        title: 'Cliente',
        field: 'nombre',
        headerStyle: {
            backgroundColor: '#0099ff',
            color: '#FFF'
          },
    },
    {
        title: 'Dirección',
        field: 'direccion'
        
    },
    {
        title: 'Teléfono',
        field: 'telefono'
        
    },
    {
        title: 'Mascota(s)',
        field: 'nombre_mascota',
        headerStyle: {
            backgroundColor: '#0099ff',
            color: '#FFF'
          },
    
    }
   
];

//Tabla clientes vista medica url
const clientesUrl = 'https://3001-jengm-proyectofinalvet-jz9gcwspzua.ws-us77.gitpod.io/api/clientes';

//estilos para material-table

const useStyles = makeStyles((theme) => ({
    modal: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    iconos:{
      cursor: 'pointer'
    }, 
    inputMaterial:{
      width: '100%'
    }
  }));
  
  


export const Datatable = () => {
  const styles = useStyles();
  const [datos, setDatos] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [clienteInput, setClienteInput] = useState(
     {
        direccion: "",
        id: "",
        nombre: "",
        nombre_mascota: "",
        telefono: "",
        user_id: ""
      }
    );

    const handleChange=e=>{
      const {name, value}=e.target;
      setClienteInput(prevState=>({
        ...prevState,
        [name]: value
      }));

        
        console.log(clienteInput);
    }
//___________metodo GET____________
  const getClientes = async () => {
    await axios.get(clientesUrl).then((res) => {
      setDatos(res.data.clientes);
      console.log(res.data.clientes);
    });
  };
//__________metodo POST____________
const postCliente = async()=>{
  await axios.post(clientesUrl, clienteInput)
  .then(res=>{
    setDatos(data.concat(res.data.clientes));
    abrirCerrarModalinsertar();
  }).catch(error=>{
    console.log(error);
  })
}



  useEffect(() => {
    getClientes();
  }, []);


  const abrirCerrarModalinsertar = () => {
    setModalInsertar(!modalInsertar)
  }

  //body  para insertar Clientes
  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Nuevo Cliente</h3>
      <TextField
        className={styles.inputMaterial}
        label="Cliente"
        name="cliente"
        onChange={handleChange}
        
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Dirección"
        name="direccion"
        onChange={handleChange}
       
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Teléfono"
        name="telefono"
        onChange={handleChange}
        
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Mascota(s)"
        name="nombre_mascota"
        // onChange={handleChange}
        
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={postCliente()} >
          Guardar
        </Button>
        <Button onClick={()=>abrirCerrarModalinsertar()}>Cancelar</Button>
      </div>
    </div>
  );

  return (
    <>
      <Button  color="primary" onClick={()=>abrirCerrarModalinsertar()}>Nuevo</Button>
      
      <MaterialTable
        columns={columnas}
        data={datos}
        icons={tableIcons}
        title={"Lista de Clientes"}
        actions={[
          {
            icon: Edit,
            tooltip: "Editar Cliente",
            onClick: (event, rowData) =>
              alert("Editar  cliente: " + rowData.nombre),
          },
          {
            icon: DeleteOutline,
            tooltip: "Eliminar Cliente",
            onClick: (event, rowData) =>
              window.confirm("Eliminar cliente: " + rowData.nombre),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
        localization={{
          header: {
            actions: "Editar",
          },
          
        }}
      />
 
     <Modal
     open={modalInsertar}
     onClose={abrirCerrarModalinsertar}
     >{bodyInsertar}</Modal>
        
            

    </>
  );
};