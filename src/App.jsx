import "./index.css";
import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

const App = () => {
  return (
    <Fragment>
      <Navbar />

      <Routes>
        <Route path="*" element={<Navigate to="home" replace={true} />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Fragment>
  );
};

export default App;
