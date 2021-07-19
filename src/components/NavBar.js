import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import navLogo from '../assets/imagenes/284301.png'
import  '../assets/css/NavBar.css';

 export default function NavBar() {
     return(
     <nav id="nav1" className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div id="div2" className="navbar-brand" >
         <img src={navLogo} alt="navLogo" width="30" height="30" className="d-inline-block align-text-top"/>
          <a href="index.html">Bienvenido a su Agenda</a>
        </div>
      </div>
     </nav>
     )
 }