import React from "react";
import Navbar from "./components/user/Navbar";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import EmailVerification from "./components/auth/EmailVerification";
import ForgetPassword from "./components/auth/ForgetPassword";
import ConfirmPassword from "./components/auth/ConfirmPassword";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/auth/signin" element={<Signin />} />
        <Route path="/admin/auth/signup" element={<Signup />} />
        <Route path="/admin/auth/verification" element={<EmailVerification />} />
        <Route path="/admin/auth/forget-password" element={<ForgetPassword />} />
        <Route path="/admin/auth/confirm-password" element={<ConfirmPassword />} />
      </Routes>
    </>
  );
}
