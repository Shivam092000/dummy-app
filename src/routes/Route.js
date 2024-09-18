import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/about-us',
        element:<About/>
    }
]);

export default router;
