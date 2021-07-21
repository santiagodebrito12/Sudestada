import React,{useContext,useState} from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext/CartContext';
import AmountContext from '../../context/AmountContext/AmountContext';
import './Purchase.css';
import { getFirestore } from '../../firebase/conector';
import firebase from 'firebase';



const Purchase = () => {
    const {amount,setId}=useContext(AmountContext);
    const{Cart,setclientInformation,clearCart}=useContext(CartContext);
    const [loading, setLoading] = useState(false);
    

    const[inputValue,setInputValue]=useState({
        name:'',
        email:'',
        phone:'',
    })


    const handleChange = e =>{
        setInputValue({
            ...inputValue,
            [e.target.name]:e.target.value,
        })

    }

    const handleSubmit = e =>{
        e.preventDefault();
        
     

        setclientInformation(inputValue);
        
    }

    
    
   const saveOrder = () => {
    setLoading(true);
    console.log('ininiciando operacion....');
    const db = getFirestore();
    const order = db.collection('orders');
    const newOrder = {
      buyer: {
        email: inputValue.email,
        name: inputValue.name,
        phone: inputValue.phone
      },
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: amount,
      items:Cart,
    };
    order
      .add(newOrder)
      .then(({ id }) => {
        setLoading(false);
        setId(id);
        
        console.log('operacion creada con exito');
        setTimeout(() => {
          clearCart();
        }, 1000);
        
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };
    
    return (
       
        <div className="container mt-5">
            
            <h2 className="text-center">Completa tus datos para finalizar la Compra</h2>
            
            <div className="row">

           
            <div className="col-8 m-auto">
            
            <form 
             type="submit" 
             onSubmit={handleSubmit} 
             className="mt-5">
            
            <label>Nombre Completo</label>
            
            <input 
              type="text" 
              placeholder="Ingrese su Nombre Completo" 
              className="w-100" 
              name="name" 
              onChange={handleChange}/>
           
            <label>Correo Electronico</label>
            
            <input 
              type="email" 
              placeholder="Ingrese su Correo Electronico" 
              className="w-100" 
              name="email"  
              onChange={handleChange}/>
           
            <label>Telefono</label>
            
            <input 
              type="number" 
              placeholder="Ingrese su Telefono" 
              className="w-100" 
              name="phone"  
              onChange={handleChange}/>
            
            <Link 
              className="button button-primary d-block m-auto" 
              to="/confirm" 
              onClick={()=>{
          
                saveOrder();

              
              
            }}>Finalizar Compra</Link>
            
            </form>
            
             </div>
            
            </div>
            
            <div/>
      
        </div>
        
      
    )
}

export default Purchase;
