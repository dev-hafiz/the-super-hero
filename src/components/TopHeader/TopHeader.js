import React from 'react';
import './TopHeader.css'
const TopHeader = () => {
     return (
          <div className = "Top-header">
               <div className="left-side-header">
                    <h3>Yearly | Docs</h3>
               </div>
               <div className="right-side-header">
                    <p>This is Our official web platform. A lot of team member provided the <span>Yearly services </span>and make much much benifites for our coustomers.</p>
                    <h3 className = "cost">Yearly Cost 70000 Dollars</h3>
               </div>
          </div>
     );
};

export default TopHeader;