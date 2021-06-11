import React,{useState} from 'react';
import carrito from '../../img/carrito.png';

import './CartWidget.css';

const CartWidget = () => {
 
    return (
      <>
      <li><a className="enlances-nav"><img src={carrito}/><span className="items"></span></a></li>
      </>
        
      );
}
 
export default CartWidget