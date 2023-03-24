import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import registerImage from "../../assets/man.png";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import styles from "./Register.module.css";
const Register = () => {
   const [registerLoading, setRegisterationLoading] = useState(false); 
   const {
      register,
      handleSubmit,
      formState: { errors, isDirty, isValid },
   } = useForm({
      mode: "onChange",
   });

   const onSubmit = (data) => {
      setRegisterationLoading(true); 
      const {email, password, name, confirm} = data; 
   }

   return (
      <div 
         className={`w-full min-h-screen flex items-center justify-center   ${styles.registerForm} py-20`}
      >
         <div
            className={`w-[350px] py-10 px-10 bg-primary relative rounded-3xl ${styles.myColor}`}
         >
            <div className="absolute top-0 left-[50%] translate-y-[-50%] translate-x-[-50%]">
               <img
                  src={registerImage}
                  alt="register_image"
                  className="w-28 h-28  "
               /> 

            </div>
            <form  onSubmit={handleSubmit(onSubmit)} className="mt-5 flex gap-3 flex-col capitalize">
               <div className="text-white   flex flex-col gap-1">
                  <label
                     htmlFor="name"
                     className="text-base font-medium capitalize"
                  >
                     Full Name:
                  </label>
                  <input
                     type="text"
                     className="text-base  placeholder:text-primary placeholder:capitalize px-2 py-1 rounded-lg  text-black  bg-white   "
                     placeholder="enter your name"
                     id="name"
                     {
                        ...register('name',{required: true, 
                        minLength: 5, 
                        })
                     }
                     
                  />
                  {/* {
                     errors?.name.type === 'required' && <ErrorMessage>"ple"</ErrorMessage>
                  } */}
               </div>
               <div className="text-white   flex flex-col gap-1">
                  <label
                     htmlFor="email"
                     className="text-base font-medium capitalize"
                  >
                     Email:
                  </label>
                  <input
                     type="email"
                     placeholder="enter your email"
                     id="email"
                     className="text-base placeholder:text-primary placeholder:capitalize px-2 py-1 rounded-lg  text-black  bg-white   ", 
                     {
                        ...register('email', {
                           required: true, 
                           pattern:{value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                        })
                     }
                  />
               </div>
               <div className="text-white   flex flex-col gap-1">
                  <label
                     htmlFor="password"
                     className="text-base font-medium capitalize"
                  >
                      Password{" "}
                  </label>
                  <input
                     type="password"
                     placeholder="enter your password"
                     id="password"
                     className="text-base px-2 py-1 rounded-lg  text-primary placeholder:text-primary placeholder:capitalize  bg-white"
                     {
                        ...register('confirm', 
                        {
                           required: true, 
                           pattern: {
                              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/
                           }
                        }
                        )
                     }
                  />
               </div>
               <div className="text-white   flex flex-col gap-1">
                  <label
                     htmlFor="password"
                     className="text-base font-medium capitalize"
                  >
                     Confirm:  
                  </label>
                  <input
                     type="password"
                     placeholder="enter your password"
                     id="password"
                     className="text-base px-2 py-1 rounded-lg  text-primary placeholder:text-primary placeholder:capitalize  bg-white"
                    
                     {
                        ...register('confirm', 
                        {
                           required: true, 
                           pattern: {
                              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/
                           }
                        }
                        )
                     }
                  />
                  <div className="flex items-center justify-start gap-3">
                     <input type="checkbox" name="accept" id="accept" 
                        {
                           ...register('checkbox', 
                           {
                              ...register('terms', {
                                 required: true, 
                              })
                           })
                        }
                     />
                     <label htmlFor="accept" className="text-[14] font-medium">
                        agree with
                        <Link to="/terms"> terms & conditions</Link>
                     </label>
                  </div>
               </div>

               <div className="flex items-center flex-col gap-5 justify-center ">
                  <button
                     type="submit"
                     className="bg-secondary  px-5 rounded-lg  text-xl  py-1 text-white"
                  >
                     Register
                  </button>
                  <div>
                     <p className="text-white">
                        Already Have an account,{" "}
                        <Link to="/login" className="text-info ">
                           please Login
                        </Link>
                     </p>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Register;
