import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import axios from "axios";
import { Modal, TextField, Button, Avatar, FormGroup, FormControlLabel, Checkbox  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { SaveRounded } from "@material-ui/icons";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const columnas = [

  {
    title: "Mascota",
    field: "nombre",
  },
  {
    title: "Dueño",
    field: "nombre_cliente",
  },
  {
    title: "Especie",
    field: "especie",
  },
  {
    title: "Edad",
    field: "edad",
  },
];

//Tabla clientes vista medica url
const clientesUrl =
process.env.BACKEND_URL  + "/api/mascotas";

//estilos para material-table

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));

export const Datatable2 = () => {
  const styles = useStyles();
  const [datos, setDatos] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [clienteInput, setClienteInput] = useState({
    direccion: "",
    nombre: "",
    telefono: "",
    nombre_mascota: "",
    especie: "",
    raza: "",
    internamiento: true,
    user_id: 4,
  });
//_________________DATOS FALSOS_________________
const [columns1, setColumns1] = useState([
  { title: 'Mascota', field: 'mascota' },
  { title: 'Dueño', field: 'dueno', initialEditValue: 'initial edit value' },
  { title: 'Especie', field: 'especie'  },
  { title: 'Edad', field: 'edad'  },
  { title: 'Sexo', field: 'sexo'  },
  
]);

const [falso, setFalso] = useState([
  { mascota: 'chucho', dueno: 'Baran', especie: "perro", edad: 63 , sexo: "M"},
  
]);


//__________________FIN DE DATOS FALSOS___________

const abrirCerrarModalInsertar = () => {
  setModalInsertar(!modalInsertar);
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClienteInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(clienteInput);
  };
  //___________metodo GET____________
  const getClientes = async () => {
    await axios.get(clientesUrl).then((res) => {
      setDatos(res.data.mascotas);
      console.log(res.data);
    });
  };
  //__________metodo POST____________
  const postCliente = async () => {
    await axios
      .post(clientesUrl, clienteInput)
      .then((res) => {
        setDatos(data.concat(res.data));
        abrirCerrarModalInsertar();
      })
      
  };

  useEffect(() => {
    getClientes();
  }, []);

  

  //body  para insertar Clientes
  const bodyInsertar = (
    <div className={styles.modal}>
      <Avatar
        alt="Remy Sharp"
        src="https://cdn-icons-png.flaticon.com/512/1995/1995549.png"
      />
      <h3>Nuevo Cliente</h3>
      <TextField
        className={styles.inputMaterial}
        label="Dueño"
        name="nombre_cliente"
        onChange={handleChange}
      />
      <br/>
      <TextField
        className={styles.inputMaterial}
        label="Dirección"
        name="direccion"
        onChange={handleChange}
      />
      <br/>
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
        onChange={handleChange}
      />
      <br />
      {/* ______datos de mascota________ */}

      <h3>Mascota</h3>
      <TextField
        className={styles.inputMaterial}
        label="Especie"
        name="especie"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Raza"
        name="raza"
        onChange={handleChange}
      />
      <br />
      <br />
      <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked   sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Internamiento" />
   
   
    </FormGroup>

      <br />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => {postCliente(); SetTimeout(() => {
      abrirCerrarModalinsertar();
    }, 2000); }}>
          Guardar
        </Button>
        <Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-90 p-1 m-5" style={{ backgroundColor: "#eee" }}>
        <MaterialTable
          columns={columnas}
          data={datos}
          icons={tableIcons}
          title={"Lista de Mascotas"}
          editable={{
            onRowAdd: newDatos =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setDatos([...datos, newDatos]);
                  
                  resolve();
                }, 1000)
              }),
            onRowUpdate: (newDatos, oldDatos) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...datos];
                  const index = oldDatos.tableData.id;
                  dataUpdate[index] = newDatos;
                  setDatos([...dataUpdate]);
    
                  resolve();
                }, 1000)
              }),
            onRowDelete: oldDatos =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...datos];
                  const index = oldDatos.tableData.id;
                  dataDelete.splice(index, 1);
                  setDatos([...dataDelete]);
                  resolve()
                }, 1000)
              }),
          }}
         options={{
            actionsColumnIndex: -1,
            exportButton: true,
            headerStyle: {
              backgroundColor: "#3e8227",
              color: "#FFF",
              ttableLayout: "fixed",
              grouping: true,
            },
          }}
          localization={{
            header: {
              actions: "Editar",
              body: { 
                editRow: 
                { deleteText: '¿Estás seguro de borrar esta Mascota?' } }              
            },
          }}
        />

       
      </div>
    </>
  );
};
