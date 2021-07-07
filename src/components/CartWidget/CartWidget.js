import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext/CartContext';
import carrito from '../../img/carrito.png';

import './CartWidget.css';

const CartWidget = () => {
  const{Cart}=useContext(CartContext);
  
  

  return (
      <>
      <li><Link to="cart" className="enlances-nav"><img src={carrito} alt="icono-carrito" className={Cart.length>0 ? "animate__animated animate__bounce animate__infinite" : "img-carrito"}/><span className="items"></span></Link></li>
      </>
        
      );
}
 
export default CartWidget;


