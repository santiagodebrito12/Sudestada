import React,{useState} from 'react';
import Card from '../Item/Item';
import kite from '../../img/imagen-kite.jpg';
const productos = [
    {nombre:'kite cabrinha',
    precio:'4500',
    industria:'brasilera',
    key:1},
    {nombre:'kite Slingshot',
    precio:'1500',
    industria:'brasilera',
    key:2},
    {nombre:'kite Naish',
    precio:'3500',
    industria:'brasilera',
    key:3,},
  ]
  

const ItemList= ({cantidadSeleccionada,setCantidadSeleccionada}) => {
   
    const [respuesta,guardarRespuesta]=useState([]);
    const consulta = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(productos);
        }, 2000);
        
})

consulta.then((data)=>{
   guardarRespuesta(data);
})
    
    
    return (
        <div className="container d-flex">
            {respuesta.map((producto=>{
                return(
                    <Card
                    key={producto.key}
                    producto={producto}
                    kite={kite}
                    cantidadSeleccionada={cantidadSeleccionada}
                    setCantidadSeleccionada={setCantidadSeleccionada}
                    />
                )
            }))}
        </div>
      );
}
 
export default ItemList;