import React from 'react';
import img from "../images/React_boiler_logo.png"
// import './components.css';
class Header extends React.Component {
   render() {
      return (
         <div className="header">
            <img src={img} height="80" width="80" alt="logo"/>
         </div>
      );
   }
}
export default Header