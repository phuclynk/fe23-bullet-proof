import React from "react";
import { AppLayout } from "layouts";
import { FullLayout } from "layouts/full-layout/FullLayout";
import { HomePage } from "pages/user/home";
import { BrowserRouter, Routes } from "react-router-dom";
import { LoginPage } from "./pages/user/auth/login";
import { RegisterPage } from "./pages/user/auth/register";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Un-Authorization Route */}
          <FullLayout path={'login'} element={<LoginPage />} /> 
          <FullLayout path={'register'} element={<RegisterPage />} />

          {/* Authorization Route */}

          {/* User Route */}
          <AppLayout path="home" element={<HomePage />} />

          {/* Admin Route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;