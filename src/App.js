import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AppLayout } from "layouts";
import AdminPage from "pages/admin";
import { HomePage } from "pages/user/home";
import { ProtectedRoute } from "./router";
import { LoginPage } from "./pages/user/auth/login";
import { RegisterPage } from "./pages/user/auth/register";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path={"login"} element={<LoginPage />} />
          <Route path={"register"} element={<RegisterPage />} />

          {/* Private Route */}
          <Route
            path={"home/:params"}
            element={
              <ProtectedRoute>
                <AppLayout>
                  <HomePage />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={"home"}
            element={
              <ProtectedRoute>
                <AppLayout>
                  <HomePage />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path={"admin"}
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          >
            <Route
              path={"category"}
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={"product"}
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={"order"}
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
