import React from "react";
import { Link } from "react-router-dom";
import {logo} from '../../assets/man.png'; 

const Navigation = () => {
   return (
      <div className="flex items-center justify-between px-10 ">
         <div>
            <img src={logo} alt="logo_employer_application" />
         </div>
         <div>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
         </div>
      </div>
   );
};

export default Navigation;
