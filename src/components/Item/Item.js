import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext/CartContext';
import SudContext from '../../context/SudContext/SudContext';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';






const Card = ({producto,kite}) => {
    
    const [cantidad , SetCantidad]=useState(0);
    const [finalizarCompra,setFinalizarCompra] = useState(false);
    const {Cart,addItem}=useContext(CartContext);
    const{setProductoSeleccionado,setMostrarDetalle} = useContext(SudContext);
    


    return ( 
          
            <div className="card" width="18rem">
            
            <img src={kite} className="card-img-top shadow p-3 mb-5 bg-body rounded" alt="foto-kite"></img>
            <div className="card-body descripcion">
                <p className="card-title"> {producto.nombre} </p>
                <p className="card-text">${producto.precio}</p>
                
                
                <ItemCount
                cantidad={cantidad}
                SetCantidad={SetCantidad}
                />
                {finalizarCompra 
                ? <button>Finalizar Compra </button> 
                :  <button className="button button-primary" onClick={()=>{
                    if(cantidad !== 0){ 
                     
                     
                     addItem({
                         nombre:producto.nombre,
                         precio:producto.precio,
                         cantidad:cantidad,
                         id:producto.id
                     })    
                    }
                    
                    setFinalizarCompra(true)
                 }
 
                 }>Agregar al carrito</button>}
               
                
                <Link to="/item/:id"
                onClick={(e)=>{
                 e.preventDefault();
                  setProductoSeleccionado(producto);
                  setMostrarDetalle(true);
                  }}
                  >
                      Ver detalle de producto

                    </Link>
                
           
            
           </div>
            </div>
            
        );
}
 
export default Card;