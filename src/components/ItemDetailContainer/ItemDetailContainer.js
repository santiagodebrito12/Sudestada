import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import SudContext from '../../context/CartContext/CartContext';
import ItemDetail from '../ItemDetail/ItemDetail';




const ItemDetailContainer = () => {
   
  
    
    return (
           
        
         <div>
         
         <Link to="/"> Volver al home </Link>
         
         <ItemDetail /> 

         </div>
           
        
      );
}
 
export default ItemDetailContainer;