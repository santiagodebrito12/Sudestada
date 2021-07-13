import React,{useState,useEffect} from 'react'
import Media from 'react-media';
import './Footer.css';


const Footer = () => {
    const [mobile,setMobile]=useState(false);
    
    
    return (
        <>
        <footer className="bg-dark">
        <div className="container-fluid">
        
        <div className="row ">
       
        

        <div className="col-4 col-footer">
        <h4>Producto</h4>
        <ul>
            <li>Promociones</li>
            <li>Nuestros Productos</li> 
            <li>Lo mas Vendido</li>
        </ul>
        </div>

        <div className="col-4 col-footer">
        <h4>Nuestra Empresa</h4>
        <ul>
            <li>Aviso Legal</li>
            <li>Condiciones de Uso</li> 
            <li>Pagos y Financiaciones</li>
        </ul>
        </div>


        <div className="col-4 col-footer">
            <h4>Informacion de la tienda</h4>
            <ul>
            <li>Sudestada Kite shop</li>
            <li>Avenida Dulce Nombre 23123 </li> 
            <li>Rada Tilly,Chubut. Argentina</li>
        </ul>
        </div>
        
        
        
        </div>
        </div>
        </footer>
        </>
    )
}

export default Footer;
