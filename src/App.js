import React from "react";
import { AppLayout } from "layouts";
import { FullLayout } from "layouts/full-layout/FullLayout";
import { HomePage } from "pages/user/home";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/user/auth/login";
import { RegisterPage } from "./pages/user/auth/register";

import "./App.css";
import { ProtectedRoute } from "components/protected-route";
import AdminPage from "pages/admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Navigate to="/login"/>}/>

          <Route path={'login'} element={<LoginPage />} /> 
          <Route path={'register'} element={<RegisterPage />} />

          {/* Private Route */}
          <Route path={'home'} element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path={'admin'} element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;