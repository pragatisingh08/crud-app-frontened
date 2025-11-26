import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Homepage";
import AboutPage from "../Pages/Aboutpage";
import ContactsPage from "../Pages/Contactpage";
import LoginPage from "../Pages/Loginpage";
import SignupPage from "../Pages/Signuppage"
import CreateEmp from "../Pages/CreateEmp";
import AllEmpPage from "../Pages/AllEmpPage";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import EditEmpPage from "../Pages/EditEmpPage";


export const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/createemp",
    element: (
      <PrivateRoutes>
        <CreateEmp/>
      </PrivateRoutes>
    ) 
  },
  {
    path: "/allemp",
    element: (
      <PrivateRoutes>
        <AllEmpPage/>
      </PrivateRoutes>
    ) 
    
  },
  {
    path:"/edit-emp/:id",
    element:<EditEmpPage/>
  }
]);