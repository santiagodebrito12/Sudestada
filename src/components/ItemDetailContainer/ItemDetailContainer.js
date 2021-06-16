import React,{useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';




const ItemDetailContainer = ({productoSeleccionado,kite}) => {
   
    const [selection, setSeletion] = useState({});

      


    const selectionEvent = new Promise((resolve,reject)=>{
            resolve(productoSeleccionado);
        
})    
    selectionEvent.then((producto)=>{
            setSeletion(producto);
         
          
    })    

    return (
           
        
         <div>
         
         <a href="http://localhost:8001/"> Volver al home </a>
         
         <ItemDetail 
         selection={selection}
         kite={kite}/> 

         </div>
           
        
      );
}
 
export default ItemDetailContainer;