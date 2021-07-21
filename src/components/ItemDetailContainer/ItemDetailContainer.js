import React from 'react';
import { Link } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';




const ItemDetailContainer = () => {
  
    
    return (
           
        
         <div>
         
         <Link
          to="/" 
          className="m-3 p-5"
          > Volver al home </Link>
         
         <ItemDetail /> 

         </div>
           
        
      );
}
 
export default ItemDetailContainer;