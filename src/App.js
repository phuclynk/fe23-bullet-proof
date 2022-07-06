import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { FullLayout } from "./layouts/full-layout/FullLayout";
import { LoginPage } from "./pages/user/auth/login";
import { RegisterPage } from "./pages/user/auth/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <FullLayout path={'login'} element={<LoginPage />} /> 
          <FullLayout path={'register'} element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;