import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/ErrorPage/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement:<Error></Error>
    },
  ]);

  export default router