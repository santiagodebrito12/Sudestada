import React,{useState,useEffect} from 'react';
import { getFirestore } from '../../firebase/conector';
import Card from '../Item/Item';
import shortid from 'shortid';
import './ItemList.css';
import kite from '../../img/imagen-kite.jpg';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';



const ItemList = ({cantidadSeleccionada,setCantidadSeleccionada}) => {
 
  
 
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('items');
    itemCollection
      .get()
      .then(querySnapshot => {
        if (querySnapshot.size === 0) {
          console.log('no results');
          setLoading(false);
          return;
        }
        
        
      
          setItems(querySnapshot.docs.map(doc =>doc.data()));
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);
 
    return ( 
     <>
    

         <div className="contenedor-productos">
      {items.map(item=>{
       console.log(item);
       return(
          <Card
          key={item.id}
         kite={kite}
          producto={item}
          />
        )
       }
      )}
      </div>
    
     </>

      );
}
 
export default ItemList;