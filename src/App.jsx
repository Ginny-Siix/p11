import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";

export default function App() {
  const token = useSelector((state) => state.userAuth.token);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/user"
          element={token ? <User /> : <Navigate to="/sign-in" />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
