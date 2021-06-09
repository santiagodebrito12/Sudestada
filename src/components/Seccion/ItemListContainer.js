import React,{useState} from 'react';
import Card from '../Card/Card';
import './Seccion.css';

import kite from '../../img/imagen-kite.jpg';



const ItemListContainer = ({greeting}) => {
    
    const[cantidad,setCantidad]=useState(0);
    const[cantidadSeleccionada,setCantidadSeleccionada]=useState();
    const stock = 6;
 

    return (
        <>
        <div className="contenedor-seccion ">
            <h2>{greeting}</h2>
     
        <div className="contenedor-productos" id="kitesurf">
            
            <Card 
            kite={kite}
            cantidad={cantidad}
            setCantidad={setCantidad}
            cantidadSeleccionada={cantidadSeleccionada}
            setCantidadSeleccionada={setCantidadSeleccionada}
            />
     
        </div>
        <div className="contenedor-carrito">
            <h2>Carrito</h2>
            <p className="parrafo-carrito">Cantidad seleccionada : {cantidadSeleccionada} </p>
           </div>
        </div>
        </>
      );
}
 
export default ItemListContainer;