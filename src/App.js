import { Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import "./App.css";

import Login from "./components/Login/Login";
import ForgotPassword from "./components/Forgot-password/Forgot-password";
import SignUp from "./components/Sign-up/Sign-up";
import HomePage from "./components/Home-page/Home-page";
import Dashboard from "./components/User/Dashboard";
import Bootstrap from "./components/Bootstrap/Bootstrap";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>

      <Dashboard />
    </>
  );
}

export default App;
