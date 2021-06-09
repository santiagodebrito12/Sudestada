import React from 'react';
import './ItemCount.css';


const ItemCount = ({cantidad,setCantidad}) => {
   
    const stock = 6 ;
  
    return (
        <>
        <div className="contenedor-aumentador">

        {cantidad>0 ?   <button className="button" onClick={()=>{
             setCantidad(
                    cantidad - 1,
                )
            }}> -1 </button> : <button className="button" disabled="true"> -1 </button> }
        
            
         
            <p>{cantidad}</p>
          
           {(cantidad<stock) ?<button className="button" onClick={()=>{
            
            setCantidad(
                cantidad +1 
            )
        }}> +1 </button> : <button className="button" disabled="true">+1</button> } 

        </div>
       
        </>
      );
}
 
export default ItemCount;