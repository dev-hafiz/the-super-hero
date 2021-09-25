import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Member from '../../Member/Member';
import "./Services.css"
const Services = () => {
     //store data on useState
     const [members, setMembers] = useState([])
     //load data on useEffect
     useEffect( ()=>{
          fetch('/servent.json')
          .then( res => res.json())
          .then(data => setMembers(data))
     },[])

     //cart useState
     const [cart, setCart] = useState([])
     
     //cart handlerAdd
     const handlerAddToCart = members =>{
          const newCart = [...cart, members]
          setCart(newCart)
     }

     return (
          <div className ="services-section">
              
             <div className="cart-container">
               <Cart cart={cart} />
               
             </div> 
             <div className="team-members-container">
               
               <div className = "member-service">
               {
                    members.map(member => <Member
                    handlerAddToCart={handlerAddToCart}
                    key ={member.id}
                     member={member} />)    
               }
               </div>
             </div>
          </div>
     );
};

export default Services;