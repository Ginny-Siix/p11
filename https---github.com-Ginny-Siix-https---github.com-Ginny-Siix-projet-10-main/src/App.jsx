import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import "./assets/style/main.css";

import Home from "./pages/home/Home";
// Importez vos composants ici (Home, SignIn, User, SignUp)
import Navbar from "./composants/NavBar/NavBar";
import Footer from "./composants/Footer/Footer";
import SignIn from "../src/composants/connexion/connexion";

export default function App() {
  const token = useSelector((store) => store.user.token);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/user"
          // Changer Home avec ta page User
          element={token ? <Home /> : <Navigate to="/sign-in" />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
