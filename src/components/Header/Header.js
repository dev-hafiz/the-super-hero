import React from 'react';
import TopHeader from '../TopHeader/TopHeader';
import './Header.css'
const Header = () => {
     return (
          <div header = "header">
               <nav>
                    <div className="logo">
                         <h2>Social Industry</h2>
                    </div>
                    <div className="nav">
                         <a href="/managment">Managment</a>
                         <a href="/services">Services</a>
                         <a href="/help">Official Help</a>
                    </div>
               </nav>
               <TopHeader/>
          </div>
     );
};

export default Header;