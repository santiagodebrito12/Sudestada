import React,{useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom';
import AmountContext from '../../context/AmountContext/AmountContext';
import Spinner from '../../helpers/Spinner/Spinner';
import './ConfirmMessage.css';
const ConfirmeMessage = () => {
    
    const [loading, setloading] = useState(true);
    const {id} = useContext(AmountContext);


    useEffect(() => {
     
        setTimeout(() => {
    
            setloading(false)  
            console.log(id);
        }, 3000);
    }, [])
  
    return (
        <>
        {loading ? <Spinner/> : 
        
        <div className="contenedor-menssage">
      
        <p className="text-center confirm-message"> ¡La compra se realizo exitosamente ! Su numero de seguimientos es {id} </p>
      
        <Link 
        to="/" 
        className="text-center">Volver a pagina de inicio </Link>
      
        </div>
        }
       
       </>
    )
}

export default ConfirmeMessage;
