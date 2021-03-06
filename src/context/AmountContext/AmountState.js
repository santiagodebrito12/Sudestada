import React,{useReducer, useState} from 'react'
import AmountContext from './AmountContext';
import { AmountReducer } from './AmountReducer';

const AmountState = (props) => {
    const [id, setId] = useState('');
    const initialState = 0;

    const [state, dispatch] = useReducer(AmountReducer, initialState)
    
    const incrementAmount = (precio) => {

        dispatch({
            type:'INCREMENT_AMOUNT',
            payload:precio,
        })
    }

    const decrementAmount = (precio) =>{
        dispatch({
            type:'DECREMENT_AMOUNT',
            payload:precio
        })
    }

    const resetAmount = () =>{
        dispatch({
            type:'RESET_AMOUNT',
        })
    }
     


    return (
        <AmountContext.Provider value={{
            amount:state,
            id,
            setId,
            incrementAmount,
            decrementAmount,
            resetAmount,
        }}>
            {props.children}
        </AmountContext.Provider>
    )
}

export default AmountState;
