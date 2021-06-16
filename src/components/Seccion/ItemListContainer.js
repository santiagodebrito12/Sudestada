import React,{useState} from 'react';
import ItemList from '../ItemList/ItemList';
import './Seccion.css';





const ItemListContainer = ({greeting,productoSeleccionado,setProductoSeleccionado}) => {
    
    const[cantidadSeleccionada,setCantidadSeleccionada]=useState(0);
    const stock = 6;
 

    return (
        <>
        <div className="contenedor-seccion ">
            <h2>{greeting}</h2>
     
       <ItemList 
        cantidadSeleccionada={cantidadSeleccionada}
        setCantidadSeleccionada={setCantidadSeleccionada}
        productoSeleccionado={productoSeleccionado}
        setProductoSeleccionado={setProductoSeleccionado} 
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