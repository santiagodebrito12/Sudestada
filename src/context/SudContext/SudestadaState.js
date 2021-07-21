import React,{useState} from 'react'
import SudContext from './SudContext';



const SudestadaState = (props) => {
   
   
    const[productoSeleccionado,setProductoSeleccionado] = useState({});
   
    const[ mostrarDetalle, setMostrarDetalle] = useState(false);
    
    
    const [cantidad, setCantidad] = useState(0)    
    
    return (
        <SudContext.Provider value={{
            cantidad,
            productoSeleccionado,
            setProductoSeleccionado,
            setCantidad,
            setMostrarDetalle,
        }}>
            {props.children}
        </SudContext.Provider>


        )
}

export default SudestadaState;
