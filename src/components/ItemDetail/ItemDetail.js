import React,{useContext} from 'react';
import SudContext from '../../context/SudContext/SudContext';

import Kite from '../../img/imagen-kite.jpg';

import './ItemDetail.css';



const ItemDetail = () => {
    const producto = localStorage.getItem('producto');
    const productoSel = JSON.parse(producto)
   console.log(productoSel)

    const {productoSeleccionado} = useContext(SudContext)

    return (
        <div className="contenedor-detail">
        <h2 className="titulo-detail">{productoSel.nombre }</h2>
        <div className="d-flex justify-content-around align-items-center">
            <div className="contenedor-img">
            <img src={Kite} className="img-detail"/>
            </div>
            <div className="contenedor-info p-5">
            <p>Descripcion: {productoSel.descripcion}</p>
            <p>Industria : {productoSel.industria }</p>
            <p>Precio : {productoSel.precio}</p>
            </div>
        </div>
    </div>
     
 
      );
}
 
export default ItemDetail;