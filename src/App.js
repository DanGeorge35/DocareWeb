import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import NoPage from "./pages/404";
import Authguard from "./components/authguard";
import Dashboard from "./pages/dashboard";

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
            element={<Authguard element={<Dashboard />} />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
