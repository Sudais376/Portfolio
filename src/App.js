import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element ={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
