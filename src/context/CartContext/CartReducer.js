export const CartReducer =(state,action)=>{
    const{type,payload}=action;


    switch(type){

                case 'ADD_ITEM':
                    return [...state,payload]
            
                    
            
                case 'DELETE_ITEM':
                    return  state.filter(state => state.id !== payload);
                    
                    
                
                case 'CLEAR_CART':
                   return state=[];
                    
                    
                    

              

            default:
                break;
    }





}