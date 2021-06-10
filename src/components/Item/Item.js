import React,{useState} from 'react';
import ItemListContainer from '../Seccion/ItemListContainer';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';





const Card = ({producto,kite,nombre,cantidad,setCantidad,cantidadSeleccionada,setCantidadSeleccionada}) => {
   
 
    return ( 
            <div className="card" width="18rem">
            <img src={kite} className="card-img-top shadow p-3 mb-5 bg-body rounded"></img>
            <div className="card-body descripcion">
                <p className="card-title"> {producto.nombre} </p>
                <p className="card-text">{producto.precio}</p>
                
                
                <ItemCount
                />

               <button className="btn btn-primary">Agregar al carrito</button>
               
               
            </div>
            </div>
        );
}
 
export default Card;