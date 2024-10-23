import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import NoPage from "./pages/404";
import Authguard from "./components/authguard";
import UserDashboard from "./pages/dashboard";
import SignUp from "./components/sign-up";
import ForgotPassword from "./components/forgot_password";
import VerifyAccount from "./components/verify";
import Login from "./components/login";

// APP SETTINGS ===================================================
// This line will remove the language setting on every page load
localStorage.removeItem("languageSelected");
// APP SETTINGS ===================================================

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <Authguard>
                <UserDashboard />
              </Authguard>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify" element={<VerifyAccount />} />
          <Route path="/forgetpass" element={<ForgotPassword />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
