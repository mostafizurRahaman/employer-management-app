import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const ErrorMessage = ({ children }) => {
   return (
      <div className="flex items-center gap-3 text-secondary">
         <RiCloseCircleLine></RiCloseCircleLine>
         <p>{children}</p>
      </div>
   );
};

export default ErrorMessage;
