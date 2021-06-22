import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';






const Card = ({producto,kite,cantidadSeleccionada,setCantidadSeleccionada,productoSeleccionado,setProductoSeleccionado,setMostrarDetalle}) => {
    
    const[cantidad,setCantidad]=useState(0);
    const [amount , setAmount]=useState(0);
    
   
    const handleSubmit = () =>{
        setCantidadSeleccionada(
            cantidadSeleccionada += cantidad 
        )
        setAmount(cantidadSeleccionada);
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

              {(amount>=1) ? null : <button className="btn btn-primary" onClick={handleSubmit}>Agregar al carrito</button> }
               
               {(amount>=1) ? <button className="btn btn-success">TERMINAR COMPRA</button> : null }
              
              
              
                <NavLink to="/item/:id"
                onClick={(e)=>{
                 e.preventDefault();
                  setProductoSeleccionado(producto);
                  setMostrarDetalle(true);
                  }}
                  >
                      Ver detalle de producto

                    </NavLink>
                
           
            
           </div>
            </div>
            
        );
}
 
export default Card;