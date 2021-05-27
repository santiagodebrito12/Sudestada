import React from 'react';
import './NavBar.css';

const NavBar = () => {
    
    return (
       <header className="contenedor-header">
           <div>
              <p className="logo">Sudestada</p>
           </div>
           
           <nav>
           <ul>
               <li><a className="enlances-nav"  href="#home"> Home</a></li>
               <li><a className="enlances-nav"  href="#kitesurf"> Kitesurf</a></li>
               <li><a className="enlances-nav"  href="#surf" >Surf</a></li>
               <li><a className="enlances-nav"  href="#windsurf">Windsurf</a></li> 
               <li><a className="enlances-nav"  href="#contacto">Contacto</a></li>   
  
           </ul>
           </nav>

           
       </header>
      );
}
 
export default NavBar;