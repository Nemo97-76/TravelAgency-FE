import Home from "./pages/home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
/* import BG from "../src/images/topimg.jpg";
 */
import BG from "../src/images/kankan-IKvJ4tL682M-unsplash.jpg";
import Errorpage from "./pages/404page.jsx";
import Sections from "./pages/sections.jsx";
import Categories from "./pages/categories.jsx";
import Trips from "./pages/trips.jsx";
import Destinations from "./pages/destinations.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <img src={BG} alt="intro bg" className="BackGround" />

        <div className="centerText">
          <h1 style={{ fontSize: "70px" }}>Explore the world together</h1>
          <p>Find awesome flights, hotel, tour, car and packages</p>
        </div>
        <Routes>
          <Route expact path="/" element={<Home />} />
          <Route path="/sections" element={<Sections />} />
          {/* sections */}
          <Route path="/categories" element={<Categories />} />
          {/* categories */}
          <Route path="/trips" element={<Trips />} />
          {/* trips */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
