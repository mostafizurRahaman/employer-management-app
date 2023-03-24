import { RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import routes  from "./Routes/Routes";

function App() {
   return <div>
    <RouterProvider router={routes}>

    </RouterProvider>
   </div>;
}

export default App;
