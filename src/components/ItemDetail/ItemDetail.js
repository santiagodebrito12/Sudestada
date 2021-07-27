import React,{useContext,useEffect,useState} from 'react';
import SudContext from '../../context/SudContext/SudContext';
import { getFirestore } from '../../firebase/conector';
import Spinner from '../../helpers/Spinner/Spinner';
import Kite from '../../img/imagen-kite.jpg';

import './ItemDetail.css';



const ItemDetail = () => {
  
   const{productoSeleccionado}=useContext(SudContext);
   const [mostrarProducto, setMostrarProducto] = useState([]);
   const {id} = productoSeleccionado;

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const productoSel = itemCollection.where('id', '==' , id );

        productoSel.get()
        .then((querySnapshot)=>{
            if(querySnapshot.size === 0){
                console.log('no hay resultado');
                return;
            }
            setMostrarProducto(querySnapshot.docs.map(doc=>doc.data()));
        })
        .catch(
            console.log('error')
        )
    }, [productoSeleccionado])

    console.log(mostrarProducto)

    return (
        <div 
        className="contenedor-detail">
        
        {mostrarProducto.length>0
        
        
        ? mostrarProducto.map(producto=>{
            return(
                <div 
                key={producto.id} className="mt-5">
                
                <h2 className="titulo-detail">{producto.nombre }</h2>
           
                <div
                 className="contenedor-img">
                   <img 
                   src={Kite} 
                   className="img-detail"
                   alt="imagen-kite"/>
               
                </div>
                    <div className="mt-3 w-75 m-3">
                     
                       <p><span className="consigna">Descripcion :</span> {producto.descripcion}</p>
                       <p><span className="consigna">Industria : </span> {producto.industria }</p>
                       <p><span className="consigna">Precio : </span> {producto.precio} </p>
                   </div>

                   
                   </div>   

               
            )
        })
        
    
    
    
        :    <Spinner/>}
        
    
      </div>
      );
}
 
export default ItemDetail;