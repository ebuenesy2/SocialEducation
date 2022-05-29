import "./index.css";
import axios from "axios";
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbarExport, GridToolbarContainer } from '@material-ui/data-grid';


//! icons
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import EmailIcon from '@material-ui/icons/Email';




/* Function */
const deleteUser =(id:any) => {
    alert(id);
    alert("delete");
}

const vieweUser =(id:any) => {
  alert(id);
  alert("vieweUser");
}

const editUser =(id:any) => {
  alert(id);
  alert("editUser");
}


const messageSend =(id:any) => {
  alert(id);
  alert("messageSend");
}

/* Html Veri Ekleme */

//! Birleştirmw
function getFullName(params:any) {
  return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
}

 //! Link
function getLink(params:any) { 
  return <a href={`${params.row.link}`}>Link</a>;
}

//! Yazı
function getText(params:any) { 
  return <a> {params.row.category} </a>;
}

//! Resim
function getImage(params:any) {
  return <img  style={{ width: "50px", height:"50px", borderRadius:"50%" }} src={params.row.image} />;
}

//! Div Kullanma
function getDiv(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> <a> {params.row.firstName} </a> <a> {params.row.lastName} </a> </div>;
}

//! Actions Kullanma
function getActions(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}>
     <div style={{ color:"red" }} onClick={()=> { deleteUser( params.row.id) }} >   <DeleteIcon />  </div>
     <div style={{ color:"blue" }} onClick={()=> { vieweUser( params.row.id) }} >   <VisibilityIcon />  </div>
     <div style={{ color:"black" }} onClick={()=> { editUser( params.row.id) }} >   <EditIcon />  </div>
     <div style={{ color:"aqua" }} onClick={()=> { messageSend( params.row.id) }} >   <EmailIcon  />  </div>
  </div>;
}

//! Resim Ad - Soyad Kullanma
function getFullNameImage(params:any) { 
  return <div style={{ display:"flex", gap:"5px" }}>  <img  style={{ width: "50px", height:"50px", borderRadius:"10px" , objectFit:"cover", objectPosition:"50% 50%"}} src={params.row.userImageUrl} /> <a> {params.row.name} </a> <a> {params.row.surname} </a> </div>;
}

//! Durum Değişimi
function getStatus(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> {params.row.onlineStatus == true ? <div style={{ color:"darkgreen" }}> Online </div> : <div style={{ color:"red" }}> Offline </div> } </div>;
}

//! Aktif Değişimi
function getActive(params:any) { 
  return <div style={{ display:"flex", gap:"5px" }}> {params.row.isActive == true ? <div style={{ color:"darkgreen" }}> Active </div> : <div style={{ color:"red" }}> Pasif </div> } </div>;
}

//! Online Page Değişimi
function getOnlinePage(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> {params.row.onlineStatus == true ? <div style={{ color:"darkgreen" }}> {params.row.onlinePage} </div> : <div style={{ color:"red" }}> Offline </div> } </div>;
}

//! Online Duration Değişimi
function getOnlineDuration(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> {params.row.onlineStatus == true ? <div style={{ color:"darkgreen" }}> {params.row.onlineDurationMs} </div> : <div style={{ color:"red" }}> Offline </div> } </div>;
}

//! Online Mod Değişimi
function getOnlineMod(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> {params.row.onlineStatus == true ? <div style={{ color:"darkgreen" }}> {params.row.onlineMod} </div> : <div style={{ color:"red" }}> Offline </div> } </div>;
}



/* Html Veri Ekleme */

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'actions', headerName: 'Actions', width: 150,  renderCell:getActions, editable: false},
  { field: 'name', headerName: 'Name', width: 250,  renderCell:getFullNameImage, editable: false},
  { field: 'role', headerName: 'Role', width: 150,  editable: false},
  { field: 'online', headerName: 'Online', width: 150, renderCell:getStatus, editable: false},
  { field: 'aktif', headerName: 'Aktif', width: 150, renderCell:getActive, editable: false},
  { field: 'email', headerName: 'Email', width: 225,  editable: false},
  { field: 'username', headerName: 'Username', width: 225,  editable: false},
  { field: 'created_at', headerName: 'Oluşturduğu Zaman', width: 250,  editable: false},
  { field: 'onlinePage', headerName: 'Online Sayfasi', width: 225, renderCell:getOnlinePage, editable: false},
  { field: 'onlineDurationMs', headerName: 'Toplam Online Süresi(ms)', width: 300, renderCell:getOnlineDuration, editable: false},
  { field: 'onlineMod', headerName: 'OnlineMod', width: 175, renderCell:getOnlineMod, editable: false},
  { field: 'onlineLastLogin_At', headerName: 'Login Zaman', width: 250,  editable: false},
  { field: 'onlineLastLoginout_At', headerName: 'Loginout Zaman', width: 250,  editable: false},

];


//! Export
function MyExportButton() {
  return (<GridToolbarContainer style={{justifyContent: 'flex-end'}}>
           <GridToolbarExport csvOptions={{ allColumns: true }} value="deneme" />
           </GridToolbarContainer>
         );
}

export const Index =(props: any) => {
  //console.log("props:",props);

    
  return (
        <div  className='TableUserList'>
          <DataGrid
              rows={props.data}
              columns={columns}
              pageSize={ Number(props.pageSize) ? Number(props.pageSize) : 8 }
              checkboxSelection
              disableSelectionOnClick
              components={{
                Toolbar: MyExportButton,
              }}
            />
        </div>
    
  )
}

export default Index;