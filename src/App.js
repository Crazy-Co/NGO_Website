import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Testimonial from "./pages/Testimonial";
import TeamPage from "./pages/TeamPage";
import DonatePage from "./pages/DonatePage";
import LoginOrRegisterPage from "./pages/LoginOrRegisterPage";

import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="NGO_Website/" element={<HomePage />} />
          <Route exact path="NGO_Website/about" element={<AboutPage />} />
          <Route exact path="NGO_Website/testimonial" element={<Testimonial />} />
          <Route exact path="NGO_Website/team" element={<TeamPage />} />
          <Route exact path="NGO_Website/donate" element={<DonatePage />} />
          <Route path="NGO_Website/joinus" element={<LoginOrRegisterPage />}>
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<Register />} />
          </Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
