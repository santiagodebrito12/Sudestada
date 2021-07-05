import React,{useReducer,useState} from 'react'
import CartContext from './CartContext';
import { CartReducer } from './CartReducer';
 
const CartState = (props) => {

    const initialState = [];
    const [state,dispatch]= useReducer(CartReducer, initialState);





    const addItem = (item) =>{
        dispatch({
            type:'ADD_ITEM',
            payload:item,
        })
    }

   
    // const setItem = (cart) =>{
    //     localStorage.setItem('carrito',JSON.stringify(cart))
    // }
    

    const deleteItem = id =>{
        dispatch({
            type:'DELETE_ITEM',
            payload:id,
        })
    }

   const clearCart = () =>{
       dispatch({
           type:'CLEAR_CART',
        
       })
   }
    
    return (
        <CartContext.Provider 
        value={{
          
            Cart:state,
            // setItem,
            addItem,
            deleteItem,
            clearCart,
            
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;
