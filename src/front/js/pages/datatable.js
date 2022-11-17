import React from "react";
import MaterialTable from "material-table";

import { forwardRef } from 'react';

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





const clientes = [
  {
  direccion: "Calle C", 
  id: 1,
  cliente: "Kevin Sr. Developer",
  telefono: "555-2555-55",
  user_id: 2,
  email : 'test@test.com',
  mascotas: 'Gato'
  },
  {
  direccion: "Calle C", 
  id: 2,
  cliente: "Kevin Sr. Developer",
  telefono: "555-2555-55",
  user_id: 2,
  email : 'test@test.com',
  mascotas: 'Gato'
  },
  {
  direccion: "Calle C", 
  id: 3,
  cliente: "Kevin Sr. Developer",
  telefono: "555-2555-55",
  user_id: 2,
  email : 'test@test.com',
  mascotas: 'Gato'
  },
  {
  direccion: "Calle C", 
  id: 4,
  cliente: "Kevin Sr. Developer",
  telefono: "555-2555-55",
  user_id: 2,
  email : 'test@test.com',
  mascotas: 'Gato'
  },
  {
  direccion: "Calle C", 
  id: 5,
  cliente: "Kevin Sr. Developer",
  telefono: "555-2555-55",
  user_id: 2,
  email : 'test@test.com',
  mascotas: 'Gato'
  },
  {
  direccion: "Calle C", 
  id: 6,
  cliente: "Kevin Sr. Developer",
  telefono: "555-2555-55",
  user_id: 2,
  email : 'test@test.com',
  mascotas: 'Gato'
  },
  {
  direccion: "Calle C", 
  id: 7,
  cliente: "Kevin Sr. Developer",
  telefono: "555-2555-55",
  user_id: 2,
  email : 'test@test.com',
  mascotas: 'Gato'
  },
  {
  direccion: "Calle C", 
  id: 8,
  cliente: "Kevin Sr. Developer",
  telefono: "555-2555-55",
  user_id: 2,
  email : 'test@test.com',
  mascotas: 'Gato'
  },
  {
  direccion: "Calle Z", 
  id: 9,
  cliente: "Jen Miss Developer",
  telefono: "111-1155-55",
  user_id: 2, 
  email: 'test2@test.com',
  mascotas: 'Perro'
  },
  {
  direccion: "Calle Z", 
  id: 10,
  cliente: "Jen Miss Developer",
  telefono: "111-1155-55",
  user_id: 2, 
  email: 'test2@test.com',
  mascotas: 'Perro'
  },
  {
  direccion: "Calle Z", 
  id: 11,
  cliente: "Jen Miss Developer",
  telefono: "111-1155-55",
  user_id: 2, 
  email: 'test2@test.com',
  mascotas: 'Perro'
  },
  {
  direccion: "Calle Z", 
  id: 12,
  cliente: "Jen Miss Developer",
  telefono: "111-1155-55",
  user_id: 2, 
  email: 'test2@test.com',
  mascotas: 'Perro'
  },
  {
  direccion: "Calle Z", 
  id: 13,
  cliente: "Jen Miss Developer",
  telefono: "111-1155-55",
  user_id: 2, 
  email: 'test2@test.com',
  mascotas: 'Perro'
  },
  {
  direccion: "Calle Z", 
  id: 14,
  cliente: "Jen Miss Developer",
  telefono: "111-1155-55",
  user_id: 2, 
  email: 'test2@test.com',
  mascotas: 'Perro'
  },
  {
  direccion: "Calle Z", 
  id: 15,
  cliente: "Jen Miss Developer",
  telefono: "111-1155-55",
  user_id: 2, 
  email: 'test2@test.com',
  mascotas: 'Perro'
  },
  {
  direccion: "Calle Z", 
  id: 16,
  cliente: "Jen Miss Developer",
  telefono: "111-1155-55",
  user_id: 2, 
  email: 'test2@test.com',
  mascotas: 'Perro'
  },
  {
  direccion: "Calle Z", 
  id: 17,
  cliente: "Jen Miss Developer",
  telefono: "111-1155-55",
  user_id: 2, 
  email: 'test2@test.com',
  mascotas: 'Perro'
  },
  {
  direccion: "Calle Z", 
  id: 18,
  cliente: "Jen Miss Developer",
  telefono: "111-1155-55",
  user_id: 2, 
  email: 'test2@test.com',
  mascotas: 'Perro'
  },
  {
  direccion: "Calle Z", 
  id: 19,
  cliente: "Jen Miss Developer",
  telefono: "111-1155-55",
  user_id: 2, 
  email: 'test2@test.com',
  mascotas: 'Perro'
  }
  ];

  const columnas = [
    {
        title: 'ID',
        field: 'id'
        
    },
    {
        title: 'Cliente',
        field: 'cliente'
        
    },
    {
        title: 'Email',
        field: 'email'
        
    },
    {
        title: 'Dirección',
        field: 'direccion'
        
    },
    {
        title: 'Mascotas',
        field: 'mascotas'
        
    }
];

export const Datatable = () => {
  return (
    <>
  
   <MaterialTable
   columns={columnas}
   data={clientes}
   icons={tableIcons}
   title={"Lista de Clientes"}
   actions={[
    {
        icon: 'edit',
        tooltip: 'Editar Cliente',
        onClick: (event,rowData)=> alert('Has presionado editar al cliente: ' + rowData.cliente)
    },
    {
        icon: 'delete',
        tooltip: 'Eliminar Cliente',
        onClick: (event,rowData)=> window.confirm('Has presionado eliminar al cliente: ' + rowData.cliente)
    },
   ]}
   options={{
    actionsColumnIndex: -1
   }}
   localization={{
    header:{
        actions: "Editar"
    }
   }}
   
   />
    </>
  )
};