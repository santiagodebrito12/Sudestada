import React from 'react';
import { Link } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';



const ItemDetailContainer = () => {
  
    
    return (
           
        
         <div className="contenedor-seccion-detail">
          
         <Link
          to="/" 
          className="link"
          > Volver al home </Link>
         
         <ItemDetail /> 

         </div>
           
        
      );
}
 
export default ItemDetailContainer;