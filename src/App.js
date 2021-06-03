import React from 'react'; 
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import ItemListContainer from './components/Seccion/ItemListContainer';





function App() {
  return (
    <div>
     <NavBar/>
     <Main/>  

    <ItemListContainer greeting='Bienvenidos a mi aplicacion'/>  
    </div>
  );
}

export default App;
