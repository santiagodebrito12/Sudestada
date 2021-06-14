import React,{useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../ItemDetail/ItemDetail';
import './Item.css';





const Card = ({producto,kite,nombre,cantidadSeleccionada,setCantidadSeleccionada,productoSeleccionado,setProductoSeleccionado,setItemActive}) => {
    
    const[cantidad,setCantidad]=useState(0);

  
    const handleSubmit = () =>{
        setCantidadSeleccionada(
            cantidadSeleccionada += cantidad 
        )
    }
    return ( 
            <div className="card" width="18rem">
            <img src={kite} className="card-img-top shadow p-3 mb-5 bg-body rounded" alt="foto-kite"></img>
            <div className="card-body descripcion">
                <p className="card-title"> {producto.nombre} </p>
                <p className="card-text">${producto.precio}</p>
                
                
                <ItemCount
                cantidad={cantidad}
                setCantidad={setCantidad}
                />

               <button className="btn btn-primary" onClick={handleSubmit}>Agregar al carrito</button>
               <a href="#itemDetail" onClick={()=>{
                   setItemActive(true);
                   setProductoSeleccionado(producto);

               }}>Ver detalle de producto</a>

               
               
               
            </div>
            </div>
        );
}
 
export default Card;