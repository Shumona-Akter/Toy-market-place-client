import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/ErrorPage/Error";
import App from "../App";
import LoginPage from "../pages/LoginPage/LoginPage";
import Resister from "../pages/Resister/Resister";

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
      ]
    },
  ]);

  export default router