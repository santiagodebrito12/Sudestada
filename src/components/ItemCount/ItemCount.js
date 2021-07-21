import React from 'react';
import './ItemCount.css';


const ItemCount = ({ cantidad , SetCantidad, stock}) => {
    
  
    return (
      <>
        <div className="contenedor-aumentador">
        
          <button 
          className="button" 
          onClick={()=>{
            if(cantidad>0){
             SetCantidad(cantidad - 1)
               
            } 
         }}> -1 </button>  
 
            <p>{cantidad}</p>
          
          <button 
          className="button" 
          onClick={()=>{
            if(cantidad<stock){
              SetCantidad( cantidad + 1)
            }
          }}> + 1 </button>
        
        </div>
       </>
      );
}
 
export default ItemCount;