import React,{useState} from 'react';
import ItemList from '../ItemList/ItemList';
import './Seccion.css';





const ItemListContainer = ({greeting}) => {
    
    const[cantidadSeleccionada,setCantidadSeleccionada]=useState(0);
    const stock = 6;
 

    return (
        <>
        <div className="contenedor-seccion ">
            <h2>{greeting}</h2>
     
       <ItemList
        
        
        cantidadSeleccionada={cantidadSeleccionada}
        setCantidadSeleccionada={setCantidadSeleccionada}
       />
        <div className="contenedor-carrito">
            <h2>Carrito</h2>
            <p className="parrafo-carrito">Cantidad seleccionada : {cantidadSeleccionada} </p>
           </div>
        </div>
        </>
      );
}
 
export default ItemListContainer;