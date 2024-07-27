import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import NoPage from "./pages/404";
import About from "./pages/about";

function App() {
  let BASEURL = "https://cadencepub.com/production/";
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home BASEURL={BASEURL} />} />
          <Route path="/" element={<Home BASEURL={BASEURL} />} />
          <Route path="/home" element={<Home BASEURL={BASEURL} />} />
          <Route path="/About" element={<About BASEURL={BASEURL} />} />
          <Route path="*" element={<NoPage BASEURL={BASEURL} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
