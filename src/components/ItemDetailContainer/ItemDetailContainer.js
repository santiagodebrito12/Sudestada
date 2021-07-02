import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import SudContext from '../../context/CartContext/CartContext';
import ItemDetail from '../ItemDetail/ItemDetail';




const ItemDetailContainer = ({kite}) => {
   
  


//     const selectionEvent = new Promise((resolve,reject)=>{
//             resolve(productoSeleccionado);
        
// })    
//     selectionEvent.then((producto)=>{
//             setSeletion(producto);
//     })    

    return (
           
        
         <div>
         
         <Link to="http://localhost:8001/"> Volver al home </Link>
         
         <ItemDetail 
        //  selection={selection}
         kite={kite}/> 

         </div>
           
        
      );
}
 
export default ItemDetailContainer;