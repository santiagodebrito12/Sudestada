import React from 'react'

import './Footer.css';


const Footer = () => {
    

    return (
        <>
        <footer className="bg-dark">
        <div className="container-fluid contenedor-footer">
        
      
       
        

        <div className=" col-footer">
        <h4>Producto</h4>
        <ul>
            <li>Promociones</li>
            <li>Nuestros Productos</li> 
            <li>Lo mas Vendido</li>
        </ul>
        </div>

        <div className=" col-footer">
        <h4>Nuestra Empresa</h4>
        <ul>
            <li>Aviso Legal</li>
            <li>Condiciones de Uso</li> 
            <li>Pagos y Financiaciones</li>
        </ul>
        </div>


        <div className=" col-footer">
            <h4>Informacion de la tienda</h4>
            <ul>
            <li>Sudestada Kite shop</li>
            <li>Avenida Dulce Nombre 23123 </li> 
            <li>Rada Tilly,Chubut. Argentina</li>
        </ul>
        </div>
        
        
        
        
        </div>
        </footer>
        </>
    )
}

export default Footer;
