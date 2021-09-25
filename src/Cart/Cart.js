import React from 'react';
import "./Cart.css"
const Cart = (props) => {
     const {cart} = props || {};
     
     const totalReducer = (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue.salary); 
     const total = cart.reduce(totalReducer , 0)

     return (
          <>
               <div className="cart-info-style">
                    <h3><i className ="fas icon fa-users"></i> Member Added : {cart.length} </h3>
                    <h3>Yearly Cost total : {total}</h3>
                    {
                         cart.map(person => <li 
                         key={person.id}
                         >{person.name}</li>)
                    }
               </div>
          </>
     );
};

export default Cart;