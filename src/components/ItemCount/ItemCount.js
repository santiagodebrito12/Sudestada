import React,{useState,useContext,useReducer} from 'react';
import SudContext from '../../context/CartContext/CartContext';
import SudReducer from '../../context/SudContext/SudestadaReducer';

import './ItemCount.css';


const ItemCount = ({ cantidad , SetCantidad, stock}) => {
    
  
    return (
      <>
        <div className="contenedor-aumentador">
        
          <button className="button" onClick={()=>{
            if(cantidad>0){
             SetCantidad(cantidad - 1)
               
            } 
         }}> -1 </button>  
 
            <p>{cantidad}</p>
          
          <button className="button" onClick={()=>{
            if(cantidad<stock){
              SetCantidad( cantidad + 1)
            }
          }}> + 1 </button>
        
        </div>
       </>
      );
}
 
export default ItemCount;