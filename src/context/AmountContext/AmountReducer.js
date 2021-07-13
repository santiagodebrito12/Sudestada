export const  AmountReducer = (state,action)=>{
        const{type,payload}=action;


        switch(type){
            case 'INCREMENT_AMOUNT':
                return state += payload*1;

            case 'DECREMENT_AMOUNT':
                return state -= payload*1;

            case 'RESET_AMOUNT':
                return state= 0 ;

            default:
                break;

        }
}