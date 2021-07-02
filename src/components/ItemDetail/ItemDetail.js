import React,{useContext} from 'react';
import SudContext from '../../context/SudContext/SudContext';
import './ItemDetail.css';



const ItemDetail = ({kite}) => {
   
    const {productoSeleccionado} = useContext(SudContext)

    return (
        <div className="contenedor-detail">
            <h2 className="titulo-detail">{productoSeleccionado.nombre }</h2>
            <div className="d-flex justify-content-around align-items-center">
                <div className="contenedor-img">
                <img src={kite} className="img-detail"/>
                </div>
                <div className="contenedor-info p-5">
                <p>Descripcion: {productoSeleccionado.descripcion}</p>
                <p>Industria : {productoSeleccionado.industria }</p>
                <p>Precio : {productoSeleccionado.precio}</p>
                </div>
            </div>
        </div>
      );
}
 
export default ItemDetail;