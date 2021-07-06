import React,{useState} from 'react';
import ItemList from '../ItemList/ItemList';
import Cart from '../Cart/Cart';
import './Seccion.css';






const ItemListContainer = ({greeting}) => {
    
    const[cantidadSeleccionada,setCantidadSeleccionada]=useState(0);
    
 

    return (
        <>
        <div className="contenedor-seccion ">
            <h2>{greeting}</h2>
     
       <ItemList 
        cantidadSeleccionada={cantidadSeleccionada}
        setCantidadSeleccionada={setCantidadSeleccionada}
       />
       {/* <Cart/> */}
       </div>
        </>
      );
}
 
export default ItemListContainer;