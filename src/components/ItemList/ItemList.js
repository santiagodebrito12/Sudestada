import React,{useState} from 'react';
import Card from '../Item/Item';
import kite from '../../img/imagen-kite.jpg';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

import './ItemList.css';

const productos = [
    {nombre:'kite cabrinha',
    precio:'4500',
    imagen:'../../img/imagen-kite.jpg',
    industria:'brasilera',
    descripcion:'La Neo esta aquí de nuevo como lider en kites de olas y freeride, dada la actual tendencia hacia la navegación strapless, la Neo cuenta como novedad, con opciones de configuración para olas y despotenciación, o bien para strapless freestyle y freeride. La Neo lleva muchos años entre las cometas más populares de la línea Duotone, y el motivo es evidente. Ofrece un manejo dinámico y una increíble deriva sobre la ola al navegar estilo freeride, y siempre es una compañera dócil. Esta cometa cuenta con un perfil único, capaz de desarrollar una enorme cantidad de potencia. Los usuarios de la Neo suelen ir uno o dos tamaños por debajo del resto de riders de la playa, lo cual refleja su gran capacidad de respuesta. Pese a su tremenda potencia, la despotenciación es increíble y, lo que es más, con la barra totalmente alejada del cuerpo ofrece un manejo excepcionalmente reactivo y preciso. Tanto si quieres surfear olas grandes y huecas en One Eye, como ejecutar trucos strapless con kite loops, a seis metros de altura o simplemente machacar olas blanditas, la Neo te permitirá un control absoluto en todo momento. Si tu vida de kiter gira en torno a las tablas de surf, necesitas la Neo en tu quiver',
    id:1},
    {nombre:'kite Slingshot',
    precio:'1500',
    imagen:'../../img/imagen-kite.jpg',
    industria:'brasilera',
    descripcion:'La Neo esta aquí de nuevo como lider en kites de olas y freeride, dada la actual tendencia hacia la navegación strapless, la Neo cuenta como novedad, con opciones de configuración para olas y despotenciación, o bien para strapless freestyle y freeride. La Neo lleva muchos años entre las cometas más populares de la línea Duotone, y el motivo es evidente. Ofrece un manejo dinámico y una increíble deriva sobre la ola al navegar estilo freeride, y siempre es una compañera dócil. Esta cometa cuenta con un perfil único, capaz de desarrollar una enorme cantidad de potencia. Los usuarios de la Neo suelen ir uno o dos tamaños por debajo del resto de riders de la playa, lo cual refleja su gran capacidad de respuesta. Pese a su tremenda potencia, la despotenciación es increíble y, lo que es más, con la barra totalmente alejada del cuerpo ofrece un manejo excepcionalmente reactivo y preciso. Tanto si quieres surfear olas grandes y huecas en One Eye, como ejecutar trucos strapless con kite loops, a seis metros de altura o simplemente machacar olas blanditas, la Neo te permitirá un control absoluto en todo momento. Si tu vida de kiter gira en torno a las tablas de surf, necesitas la Neo en tu quiver',
    id:2},
    {nombre:'kite Naish',
    precio:'3500',
    imagen:'../../img/imagen-kite.jpg',
    industria:'brasilera',
    descripcion:'La Neo esta aquí de nuevo como lider en kites de olas y freeride, dada la actual tendencia hacia la navegación strapless, la Neo cuenta como novedad, con opciones de configuración para olas y despotenciación, o bien para strapless freestyle y freeride. La Neo lleva muchos años entre las cometas más populares de la línea Duotone, y el motivo es evidente. Ofrece un manejo dinámico y una increíble deriva sobre la ola al navegar estilo freeride, y siempre es una compañera dócil. Esta cometa cuenta con un perfil único, capaz de desarrollar una enorme cantidad de potencia. Los usuarios de la Neo suelen ir uno o dos tamaños por debajo del resto de riders de la playa, lo cual refleja su gran capacidad de respuesta. Pese a su tremenda potencia, la despotenciación es increíble y, lo que es más, con la barra totalmente alejada del cuerpo ofrece un manejo excepcionalmente reactivo y preciso. Tanto si quieres surfear olas grandes y huecas en One Eye, como ejecutar trucos strapless con kite loops, a seis metros de altura o simplemente machacar olas blanditas, la Neo te permitirá un control absoluto en todo momento. Si tu vida de kiter gira en torno a las tablas de surf, necesitas la Neo en tu quiver'
    ,
    id:3,},
    {nombre:'Kite Core',
    precio:3500,
    imagen:'../../img/imagen-kite.jpg',
    industria:'hawaiana',
    descripcion:'La Neo esta aquí de nuevo como lider en kites de olas y freeride, dada la actual tendencia hacia la navegación strapless, la Neo cuenta como novedad, con opciones de configuración para olas y despotenciación, o bien para strapless freestyle y freeride. La Neo lleva muchos años entre las cometas más populares de la línea Duotone, y el motivo es evidente. Ofrece un manejo dinámico y una increíble deriva sobre la ola al navegar estilo freeride, y siempre es una compañera dócil. Esta cometa cuenta con un perfil único, capaz de desarrollar una enorme cantidad de potencia. Los usuarios de la Neo suelen ir uno o dos tamaños por debajo del resto de riders de la playa, lo cual refleja su gran capacidad de respuesta. Pese a su tremenda potencia, la despotenciación es increíble y, lo que es más, con la barra totalmente alejada del cuerpo ofrece un manejo excepcionalmente reactivo y preciso. Tanto si quieres surfear olas grandes y huecas en One Eye, como ejecutar trucos strapless con kite loops, a seis metros de altura o simplemente machacar olas blanditas, la Neo te permitirá un control absoluto en todo momento. Si tu vida de kiter gira en torno a las tablas de surf, necesitas la Neo en tu quiver',
    id:4},
    {nombre:'Kite Cabrinha 12m',
    precio:1300,
    imagen:'../../img/imagen-kite.jpg',
    industria:'Argentina',
    descripcion:'La Neo esta aquí de nuevo como lider en kites de olas y freeride, dada la actual tendencia hacia la navegación strapless, la Neo cuenta como novedad, con opciones de configuración para olas y despotenciación, o bien para strapless freestyle y freeride. La Neo lleva muchos años entre las cometas más populares de la línea Duotone, y el motivo es evidente. Ofrece un manejo dinámico y una increíble deriva sobre la ola al navegar estilo freeride, y siempre es una compañera dócil. Esta cometa cuenta con un perfil único, capaz de desarrollar una enorme cantidad de potencia. Los usuarios de la Neo suelen ir uno o dos tamaños por debajo del resto de riders de la playa, lo cual refleja su gran capacidad de respuesta. Pese a su tremenda potencia, la despotenciación es increíble y, lo que es más, con la barra totalmente alejada del cuerpo ofrece un manejo excepcionalmente reactivo y preciso. Tanto si quieres surfear olas grandes y huecas en One Eye, como ejecutar trucos strapless con kite loops, a seis metros de altura o simplemente machacar olas blanditas, la Neo te permitirá un control absoluto en todo momento. Si tu vida de kiter gira en torno a las tablas de surf, necesitas la Neo en tu quiver',
    id:5},
    {nombre:'Kite RPM',
    precio:6500,
    imagen:'../../img/imagen-kite.jpg',
    industria:'Australiana',
    descripcion:'La Neo esta aquí de nuevo como lider en kites de olas y freeride, dada la actual tendencia hacia la navegación strapless, la Neo cuenta como novedad, con opciones de configuración para olas y despotenciación, o bien para strapless freestyle y freeride. La Neo lleva muchos años entre las cometas más populares de la línea Duotone, y el motivo es evidente. Ofrece un manejo dinámico y una increíble deriva sobre la ola al navegar estilo freeride, y siempre es una compañera dócil. Esta cometa cuenta con un perfil único, capaz de desarrollar una enorme cantidad de potencia. Los usuarios de la Neo suelen ir uno o dos tamaños por debajo del resto de riders de la playa, lo cual refleja su gran capacidad de respuesta. Pese a su tremenda potencia, la despotenciación es increíble y, lo que es más, con la barra totalmente alejada del cuerpo ofrece un manejo excepcionalmente reactivo y preciso. Tanto si quieres surfear olas grandes y huecas en One Eye, como ejecutar trucos strapless con kite loops, a seis metros de altura o simplemente machacar olas blanditas.',
    id:6}
  ]
  

const ItemList= ({cantidadSeleccionada,setCantidadSeleccionada}) => {
   
    const [respuesta,guardarRespuesta]=useState([]);
    const[productoSeleccionado,setProductoSeleccionado]=useState({});

    

    const consulta = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(productos);
        }, 2000);
        
})

consulta.then((data)=>{
   guardarRespuesta(data);
})
    
    
    return (
        <>
        <div className="container-fluid d-flex flex-wrap contenedor-productos">
            {respuesta.map((producto=>{
                return(
                    <Card
                    key={producto.id}
                    producto={producto}
                    kite={kite}
                    cantidadSeleccionada={cantidadSeleccionada}
                    setCantidadSeleccionada={setCantidadSeleccionada}
                    productoSeleccionado={productoSeleccionado}
                    setProductoSeleccionado={setProductoSeleccionado}
                    
                    />
                )
            }))}
        </div>
        
        </>
      );
}
 
export default ItemList;