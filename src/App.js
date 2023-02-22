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
import Refund from "./components/Refund/Refund";
import Terms from "./components/Terms/Terms";
import Account from "./components/Account/Account";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Navbar />
          <Chat/>
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/privacy" element={<Privacy />} />
            <Route exact path="/refund" element={<Refund />} />
            <Route exact path="/terms" element={<Terms />} />
            <Route exact path="/account" element={<Account />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
