import React,{useState} from 'react'; 
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Main from './components/Main/Main';
import ItemListContainer from './components/Seccion/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';







function App() {
  
  
  return (

    <Router>
     <NavBar
     />

     <Main/>  
    <Switch>

      <Route exact path='/'>
      <ItemListContainer greeting=' Bienvenidos a mi Aplicacion' />
      </Route>
      <Route exact path='/category/:id'>
      <ItemListContainer greeting=' Bienvenidos a mi Aplicacion' />
      </Route>

      <Route exact path="/item/:id">
        <ItemDetailContainer />
      </Route>

     </Switch>
    </Router>
    
  );
}

export default App;
