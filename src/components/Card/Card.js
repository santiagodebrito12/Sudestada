import React,{useState} from 'react';
import ItemListContainer from '../Seccion/ItemListContainer';
import './Card.css';





const Card = ({kite,nombre,setCantidad,items,setItems, total,stock}) => {
    
    
    
    const[cantidadSeleccionada,guardarCantidadSeleccionada]=useState({
      cantidad: 0,
  });

    

    const{cantidad} = cantidadSeleccionada;

    const handleChange = (e) =>{
  
    guardarCantidadSeleccionada({
         ...cantidadSeleccionada,
         [e.target.name]:e.target.value,
     })
  }

  

  const handleCLick = (e) => {
        e.preventDefault();
        //validacion

        if(cantidad <= 0){
            console.log('ingrese un cantidad valida')
            return;
        }
        setItems([
            ...items,
            cantidad
        ])
    }





    return ( 
            <div className="card" width="18rem">
            <img src={kite} className="card-img-top shadow p-3 mb-5 bg-body rounded"></img>
            <div className="card-body descripcion">
                <p className="card-title"> {nombre} </p>
                <p className="card-text">$55.000</p>
                <select name="cantidad" onChange={handleChange}>
                        <option value={0}>--agregar Cantidad--</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                </select>
 
                {total<20  ?  <button className="btn btn-primary" onClick={handleCLick}>Agregar al carrito</button> :  <button className="btn btn-primary" disabled="true" >Agregar al carrito</button>  }
               
            </div>
            </div>
        );
}
 
export default Card;