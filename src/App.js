import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Shop from "./components/Shop/Shop";
import Checkout from "./components/Checkout/Checkout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Privacy from "./components/Privacy/Privacy";


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/privacy" element={<Privacy />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
