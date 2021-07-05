import React,{useContext} from 'react'
import CartContext from '../../context/CartContext/CartContext';
import './Cart.css';
import Kite from '../../img/imagen-kite.jpg';

const Cart = () => {
    const {Cart,deleteItem,clearCart} = useContext(CartContext)
    // const carrito = JSON.parse(localStorage.getItem('carrito'));

    return (
        <div className="contenedor-carrito">
           <h1>Tu carrito de compras</h1>
            <div className="card w-50">
        
           {(Cart.length>0)
            
            
            
            ? 
                   
            Cart.map((producto,i)=>{
                return(
                    <div key={producto.id} className="d-flex justify-content-between align-items-center">
                        <img src={Kite} alt="imagen kite" className="img-kite"/>
                        <p className="m-2 p-2">{producto.nombre}</p>
                        <p className="m-2 p-2">{producto.cantidad}</p>
                        <p className="m-2 p-2">{producto.precio}</p>
                        <button className=" btn-danger" onClick={()=>{
                            deleteItem(producto.id);
                        
                           

                        }}>Elimar del carrito</button>
                    </div>
                )
            })
            
            
            
            :<p className="text-center ">No hay productos en el carrito</p>}
            <button onClick={()=>{
                clearCart();
            }} className="button-primary"> Limpiar Carrito </button>
            </div>

        </div>
    )
}

export default Cart;
