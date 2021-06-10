import React from 'react';
import './ItemCount.css';


const ItemCount = ({cantidad,setCantidad}) => {
   
    const stock = 6 ;
  
    return (
        <>
        <div className="contenedor-aumentador">
        
         <button className="button"> -1 </button> 
        
            
         
            <p>{cantidad=0}</p>
          
           <button className="button"> +1 </button>
        </div>
       
        </>
      );
}
 
export default ItemCount;