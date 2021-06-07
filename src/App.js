import React,{useState}from 'react'; 
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import ItemListContainer from './components/Seccion/ItemListContainer';






function App() {

  const[cantidad,setCantidad]=useState(0);
  const[items,setItems]=useState([]);
  let total = 0;
  
  if(items.length>=1){
    items.map(item=>{
      total += parseInt(item) 
    })
  }
  
  
  
  return (
    <div>
     <NavBar
     total={total}/>
     <Main/>  

    <ItemListContainer
     greeting='Bienvenidos a mi aplicacion' 
     cantidad={cantidad} setCantidad={setCantidad} 
     items={items} 
     setItems={setItems}
     total={total}
     />

     {(total>=20) ? <p className="alert-danger error"> No hay stock disponible </p>   : null}
    
    </div>
  );
}

export default App;
