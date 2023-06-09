
import { createBrowserRouter } from 'react-router-dom';
import Main from "../Layout/Main";
import Home from '../Pages/Home/Home';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const routes = createBrowserRouter([
   {
      path:"/", 
      element:<Main></Main>, 
      children:[
            {
               path: "/",
               element: <Home></Home>
            }, 
            {
               path:"/home", 
               element:<Home></Home>
            }, 
            {
               path: "/register",
               element:<Register></Register> 
            }, 
            {
               path:"/login", 
               element:<Login></Login>
            }
      ]
        
      
   }
])


export default routes; 