import React,{useState,useEffect} from 'react';
import { getFirestore } from '../../firebase/conector';
import Card from '../Item/Item';
import './ItemList.css';
import kite from '../../img/imagen-kite.jpg';
import kite2 from '../../img/kite2.jpg'
import kite3 from '../../img/kite3.jpg'
import kite4 from '../../img/kite6.jpg'
import kite5 from '../../img/kite5.jpg'
import kite6 from '../../img/kite4.jpg'




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
        
         {items.map((item,i)=>{
         const imagenes = [kite,kite2,kite3,kite4,kite5,kite6];  
         return(
         <Card
         key={item.id}
         img={imagenes[i]}
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