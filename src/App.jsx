import "./index.css";
import { Fragment } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

const router = createBrowserRouter([
  {
    path: "",
    element: <Navbar />,
    children: [
      { path: "*", element: <Navigate to="/" replace={true} /> },
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default App;
