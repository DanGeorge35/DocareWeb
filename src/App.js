import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import NoPage from "./pages/404";
import Authguard from "./components/authguard";
import Dashboard from "./pages/dashboard";

import SignUp from "./components/sign-up";
import ForgotPassword from "./components/forgot_password";

import CreateAccount from "./pages/createAccount";
import CreateAccount_Doc from "./pages/doctors/createAccount_doc";
import Verify_code from "./pages/doctors/verify_code";

// APP SETTINGS =================================================== ===================================================
localStorage.removeItem("languageSelected");
// APP SETTING =================================================== ===================================================

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/createaccount_doc" element={<CreateAccount_Doc />} />
          <Route path="/verify" element={<Verify_code />} />
          <Route
            path="/dashboard"
            element={<Authguard element={<Dashboard />} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpass" element={<ForgotPassword />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
