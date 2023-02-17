import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
