import React from 'react';
import Card from '../Card/Card';
import './Seccion.css';

import kite from '../../img/imagen-kite.jpg';
import kite2 from '../../img/kite2.jpg'


const ItemListContainer = ({greeting}) => {
    
    return (

        <div className="contenedor-seccion ">
            <h2>{greeting}</h2>
     
        <div className="contenedor-productos" id="kitesurf">

            <Card 
            kite={kite}
            nombre='Cabrinha Switchblade 12 mts'
            />
            <Card
            kite={kite2}
            nombre="Naish 9mts"/>
            <Card
            kite={kite}
            nombre='Cabrinha Switchblade 12 mts'
            />
            <Card
             kite={kite2}
             nombre="Naish 9mts"
            />
            <Card
            kite={kite2}
            nombre="Naish 9mts"
            />
            <Card 
            kite={kite}
            nombre='Cabrinha Switchblade 12 mts'/>


        </div>
        </div>
      );
}
 
export default ItemListContainer;