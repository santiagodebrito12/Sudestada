import React,{useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';




const ItemDetailContainer = ({productoSeleccionado,kite}) => {
   
    const [selection, setSeletion] = useState({});

    const selectionEvent = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(productoSeleccionado);
        }, 2000);
})    
    selectionEvent.then((producto)=>{
            setSeletion(producto);
    })    

    return (
        <div>
        <ItemDetail 
        selection={selection}
        kite={kite}/>
        </div>
      );
}
 
export default ItemDetailContainer;