import React,{useState} from 'react';
import ItemListContainer from '../Seccion/ItemListContainer';
import ItemCount from '../ItemCount/ItemCount';
import './Card.css';





const Card = ({kite,nombre,cantidad,setCantidad,cantidadSeleccionada,setCantidadSeleccionada}) => {
   
 
    const handleSubmit = (e) =>{
        e.preventDefault();
    
        setCantidadSeleccionada(cantidad)

    }


    return ( 
            <div className="card" width="18rem">
            <img src={kite} className="card-img-top shadow p-3 mb-5 bg-body rounded"></img>
            <div className="card-body descripcion">
                <p className="card-title"> {nombre} </p>
                <p className="card-text">$55.000</p>
                
                
                <ItemCount
                cantidad={cantidad}
                setCantidad={setCantidad}/>

               <button className="btn btn-primary" onClick={handleSubmit}>Agregar al carrito</button>
               
               
            </div>
            </div>
        );
}
 
export default Card;