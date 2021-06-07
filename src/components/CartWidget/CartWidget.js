import React,{useState} from 'react';
import carrito from '../../img/carrito.png';

import './CartWidget.css';

const CartWidget = ({total}) => {
 
    return (
      <>
      <li><a className="enlances-nav"><img src={carrito}/><span className="items">{total}</span></a></li>
      </>
        
      );
}
 
export default CartWidget