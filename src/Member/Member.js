import React from 'react';
import "./Member.css"
const Member = (props) => {
     const {id, name, phone, post, salary, img, experiance, email} = props.member || {};

     return (
          <div>
              <div className = "member-cart">
               <img src={img} alt="" />
               <div>
                    <h3>Name : {name}</h3>
                    <h4>Phone : {phone}</h4>
                    <h4>Post : {post}</h4>
                    <h4>Experience : {experiance}</h4>
                    <h4>E-mail : <small>{email}</small></h4>
                    <h3>Salary : ${salary}</h3>

                    <button onClick={()=> props.handlerAddToCart(props.member)} className= "btn-work-primary"> <i className="fas fa-cart-plus"></i> add to cart</button>
               </div>
              </div>
          </div>
     );
};

export default Member;