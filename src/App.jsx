import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Site } from "./Pages/Site";
import { Signup } from "./Pages/signup";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Site />} />
        <Route path="/login" element={<Site />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
