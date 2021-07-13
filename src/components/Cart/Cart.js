import React,{useContext,useState} from 'react'
import CartContext from '../../context/CartContext/CartContext';
import './Cart.css';
import Kite from '../../img/imagen-kite.jpg';
import AmountContext from '../../context/AmountContext/AmountContext';
import { Link } from 'react-router-dom';
import Purchase from '../Purchase/Purchase';

const Cart = () => {

    const {Cart,deleteItem,clearCart} = useContext(CartContext)
    const {amount,decrementAmount,resetAmount}=useContext(AmountContext);
    // const carrito = JSON.parse(localStorage.getItem('carrito'));
  
    
  
    
    return (
        <div className="contenedor-carrito">
           <h1>Tu carrito de compras</h1>
            <div className="card w-75">
        
           {(Cart.length>0)
            
            
            
            ? 
                   
            Cart.map((producto,i)=>{
              const total = producto.precio * producto.cantidad;

                return(
                    <div key={producto.id} className="d-flex justify-content-between align-items-center ">
                        <img src={Kite} alt="imagen kite" className="img-kite img-fluid"/>
                        <p className="m-2 p-2">{producto.nombre}</p>
                        <p className="m-2 p-2">{producto.cantidad}</p>
                        <p className="m-2 p-2">{producto.precio}</p>
                        
                        <button className=" btn-danger" onClick={()=>{
                            deleteItem(producto.id);
                        
                           decrementAmount(total)

                        }}>X</button>
                    </div>
                )
            })
            
            
            
            :<p className="text-center ">No hay productos en el carrito</p>}
            <button onClick={()=>{
                clearCart();
                resetAmount();
            }} className="button-primary w-50 d-block m-auto">  Limpiar Carrito </button>
               <p className="amount" className="text-center mt-3">Total a pagar: $ {amount}</p>
            </div>
        
         
         <div>
             
         </div>
         <Purchase/>
        </div>
    )
}

export default Cart;
