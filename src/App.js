import React from 'react'; 
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Main from './components/Main/Main';
import ItemListContainer from './components/Seccion/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import SudestadaState from './context/SudContext/SudestadaState';
import CartState from './context/CartContext/CartState';
import AmountState from './context/AmountContext/AmountState';
import ConfirmeMessage from './components/ConfirmMessage/ConfirmeMessage';
import Footer from './components/Footer/Footer';








function App() {
  
  
  return (

    
      <SudestadaState>
      
      <CartState>

      <AmountState>    

      <Router>
            <NavBar/>

            <Main/>  
           
           
              
              <Switch>

             <Route 
                 exact path='/' 
                 component={ItemListContainer}/>
     
             <Route 
                 exact path='/category/:id' 
                 component={ItemDetailContainer}/>
    
             <Route  
                 path="/item/:id" 
                 component={ItemDetailContainer}/>

             <Route 
                 exact path="/cart" 
                 component={Cart}/>
        
             <Route 
                 exact path="/confirm" 
                 component={ConfirmeMessage}/>
          
           </Switch>
    
      </Router>
     
      <Footer/>
    
           </AmountState>  
        
        </CartState>
      
      </SudestadaState>
   
    
    
  );
}

export default App;
