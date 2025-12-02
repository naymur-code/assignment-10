import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import ForgetPass from "../pages/ForgetPass";
import AddServices from "../pages/AddServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/services", element: <Services /> },
      {
        path: "/add-services",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
      },
      { path: "/serviceDetails/:id", element: <ServiceDetails /> },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Register /> },
      {
        path: "/forget/:email",
        element: <ForgetPass />,
      },
    ],
  },
]);

export default router;
