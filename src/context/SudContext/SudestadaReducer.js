
 const SudReducer = (state,action) =>{

        const {type,payload} = action;

        switch(type){

            case 'INCREMENT':
                return state + 1;

            case 'DECREMENT':
                return state - 1;
                
                
                default:
                 break;

        }




}

export default SudReducer;