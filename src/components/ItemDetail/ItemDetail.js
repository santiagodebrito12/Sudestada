import React from 'react';
import './ItemDetail.css';



const ItemDetail = ({selection,kite}) => {
    
    return (
        <div className="contenedor-detail">
            <h2 className="titulo-detail">{selection.nombre}</h2>
            <div className="d-flex justify-content-around align-items-center">
                <div className="contenedor-img">
                <img src={kite} className="img-detail"/>
                </div>
                <div className="contenedor-info p-5">
                <p>Descripcion: {selection.descripcion}</p>
                <p>Industria : {selection.industria}</p>
                <p>Precio : {selection.precio}</p>
                </div>
            </div>
        </div>
      );
}
 
export default ItemDetail;