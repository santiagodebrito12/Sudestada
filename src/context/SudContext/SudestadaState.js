import React,{useState,useReducer} from 'react'
import SudContext from './SudContext';
import SudReducer from './SudestadaReducer';


const SudestadaState = (props) => {
   
   
    const[productoSeleccionado,setProductoSeleccionado] = useState({});
    const[ mostrarDetalle, setMostrarDetalle] = useState(false);
    
    
    const initialState = [];

    const [state, dispatch] = useReducer(SudReducer, initialState );
  
    const [cantidad, setCantidad] = useState(0)    
    
    return (
        <SudContext.Provider value={{
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
