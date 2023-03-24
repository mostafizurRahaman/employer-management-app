import React from "react";
import { Link } from "react-router-dom";
import employer from "../../assets/management.png";

const Navigation = () => {
   return (
      <div className="flex items-center justify-between h-[80px] py-5 bg-primary px-10 text-white">
         <div >
            <img
               src={employer}
               alt="logo_employer_application"
               className="w-14 h-14"
            />
         </div>
         <div className="flex items-center gap-5 font-bold ">
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
         </div>
      </div>
   );
};

export default Navigation;
