import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Spinner from '../../helpers/Spinner/Spinner';
import './ConfirmMessage.css';
const ConfirmeMessage = () => {
    
    const [loading, setloading] = useState(true);
  
    useEffect(() => {
     
        setTimeout(() => {
         setloading(false)  
       }, 3000);
    }, [])
  
    return (
        <>
        {loading ? <Spinner/> : 
        
        <div className="contenedor-menssage">
        <p className="text-center confirm-message"> ¡La compra se realizo exitosamente !</p>
        <Link to="/" className="text-center">Volver a pagina de inicio </Link>
        </div>
        }
       
       </>
    )
}

export default ConfirmeMessage;
