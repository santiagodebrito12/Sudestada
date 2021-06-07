import React,{useState} from 'react';
import Card from '../Card/Card';
import './Seccion.css';

import kite from '../../img/imagen-kite.jpg';
import kite2 from '../../img/kite2.jpg'


const ItemListContainer = ({greeting,setCantidad,items,setItems,total}) => {
    
    return (
        <>
        <div className="contenedor-seccion ">
            <h2>{greeting}</h2>
     
        <div className="contenedor-productos" id="kitesurf">
            
            <Card 
            kite={kite}
            nombre='Cabrinha Switchblade 12 mts'
            setCantidad={setCantidad}
            items={items}
            setItems={setItems}
            total={total}
            />


            <Card
            kite={kite2}
            nombre="Naish 9mts"
            setCantidad={setCantidad}
            items={items}
            setItems={setItems}
            total={total}
            />

            <Card
            kite={kite}
            nombre='Cabrinha Switchblade 12 mts'
            setCantidad={setCantidad}
            items={items}
            setItems={setItems}
            total={total}

            />
            <Card
            
             kite={kite2}
             nombre="Naish 9mts"
             setCantidad={setCantidad}
             items={items}
             setItems={setItems}
             total={total}

            />
            <Card
            kite={kite2}
            nombre="Naish 9mts"
            setCantidad={setCantidad}
            items={items}
            setItems={setItems}
             total={total}
           />
            <Card 
            kite={kite}
            nombre='Cabrinha Switchblade 12 mts'
            setCantidad={setCantidad}
            items={items}
            setItems={setItems}
            total={total}
            />

        </div>
        </div>
        </>
      );
}
 
export default ItemListContainer;