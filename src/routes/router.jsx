import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/ErrorPage/Error";
import App from "../App";
import LoginPage from "../pages/LoginPage/LoginPage";
import Resister from "../pages/Resister/Resister";
import Blog from "../pages/Blog/Blog";
import AddProduct from "../pages/AddProducts/AddProduct";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/login",
          element:<LoginPage/>
        },
        {
          path:"/resister",
          element:<Resister/>
        },
        {
          path:"/blog",
          element:<Blog/>,
          // <PrivateRoute></PrivateRoute>
        },
        {
          path:"/allToys",
          element:<AllToys/>,
          loader:()=> fetch("https://toys-car-server-site.vercel.app/addToys")
        },
        {
          path:"/addToys",
          element:<PrivateRoute><AddProduct/></PrivateRoute>
        },
        {
          path:"/myToys",
          element:<PrivateRoute><MyToys/></PrivateRoute>
        },
      ]
    },
  ]);

  export default router