import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import carrito from '../../img/carrito.png';

import './CartWidget.css';

const CartWidget = () => {
 
    return (
      <>
      <li><Link to="cart" className="enlances-nav"><img src={carrito}/><span className="items"></span></Link></li>
      </>
        
      );
}
 
export default CartWidget