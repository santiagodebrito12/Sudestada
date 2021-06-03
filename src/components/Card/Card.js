import React from 'react';
import './Card.css';





const Card = ({kite,nombre}) => {
  

    return ( 
            <div className="card" width="18rem">
            <img src={kite} className="card-img-top shadow p-3 mb-5 bg-body rounded"></img>
            <div className="card-body descripcion">
                <p className="card-title"> {nombre} </p>
                <p className="card-text">$55.000</p>
                <button className="btn btn-primary"> comprar</button>
            </div>
            </div>
        );
}
 
export default Card;