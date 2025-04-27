import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path: "/register",
        element: <Register />,
      }
    ]
  }
]);

function App() {
  return (
      <div>
        <RouterProvider router={router} />
      </div>
  )
};

export default App;
