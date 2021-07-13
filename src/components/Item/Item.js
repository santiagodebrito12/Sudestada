import React,{useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import AmountContext from '../../context/AmountContext/AmountContext';
import CartContext from '../../context/CartContext/CartContext';
import SudContext from '../../context/SudContext/SudContext';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';






const Card = ({producto,kite,key}) => {
    
    const [cantidad , SetCantidad]=useState(0);
    const [finalizarCompra,setFinalizarCompra] = useState(false);
    const {addItem}=useContext(CartContext);
    const {setProductoSeleccionado} = useContext(SudContext);
    const {incrementAmount}= useContext(AmountContext);
    const stock = parseInt(producto.stock);
    
    const total = cantidad * producto.precio;
    


    return ( 
          
            <div className="card">
            
            <img src={kite} className="card-img-top shadow p-3 mb-5 bg-body rounded" alt="foto-kite"></img>
            <div className="card-body descripcion">
                <p className="card-title"> {producto.nombre} </p>
                <p className="card-text">${producto.precio}</p>
                
                
                <ItemCount
                cantidad={cantidad}
                SetCantidad={SetCantidad}
                stock={stock}
                />
                {finalizarCompra 
               
               ? <Link className="button" to="/cart">Finalizar Compra </Link> 
               
                :  <button className="button button-primary" onClick={()=>{
                    if(cantidad !== 0){ 
                     
                     
                     addItem({
                         nombre:producto.nombre,
                         precio:producto.precio,
                         cantidad:cantidad,
                         total,
                         id:producto.id
                     }) 
                     incrementAmount(total)
                     
                    setFinalizarCompra(true)

                    }
                    
                 }
 
                 }>Agregar al carrito</button>}
               
                
                <Link to="/item/:id"
                onClick={(e)=>{
                    setProductoSeleccionado(producto)
               
                  }}
                  >
                      Ver detalle de producto

                    </Link>
                
           
            
           </div>
            </div>
            
        );
}
 
export default Card;