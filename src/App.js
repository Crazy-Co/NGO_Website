import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageLoggedOut from "./pages/HomePageLoggedOut";
// import HomePageLoggedIn from "./pages/HomePageLoggedIn";

import AboutPage from "./pages/AboutPage";
import Testimonial from "./pages/Testimonial";
import TeamPage from "./pages/TeamPage";
import DonatePage from "./pages/DonatePage";
import LoginOrRegisterPage from "./pages/LoginOrRegisterPage";

import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HomePageLoggedIn from "./pages/HomePageLogedIn";
import TestimonialLoggedIn from "./pages/TestimonialLoggedIn";
import DonatePageLoggedIn from './pages/DonatePageLoggedIn'
import TeamPageLoggedIn from './pages/TeamPageLoggedIn'
import AboutPageLoggedIn from './pages/AboutPageLoggedIn'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}

        <Routes>
          <Route path="NGO_Website">

            {/* <Route path="signedin" element={<HomePageLoggedIn login='loggedIn' />}> */}
              <Route path="signedin" element={<HomePageLoggedIn />} />
              <Route exact path="signedin/about" element={<AboutPageLoggedIn />} />
              <Route exact path="signedin/testimonial" element={<TestimonialLoggedIn />} />
              <Route exact path="signedin/team" element={<TeamPageLoggedIn />} />
              <Route exact path="signedin/donate" element={<DonatePageLoggedIn />} />
            {/* </Route> */}
            <Route path="" element={<HomePageLoggedOut />} />
            <Route exact path="about" element={<AboutPage />} />
            <Route exact path="testimonial" element={<Testimonial />} />
            <Route exact path="team" element={<TeamPage />} />
            <Route exact path="donate" element={<DonatePage />} />
            <Route path="joinus" element={<LoginOrRegisterPage />}>
              <Route path="signin" element={<Login />} />
              <Route path="signup" element={<Register />} />
            </Route>
          </Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
