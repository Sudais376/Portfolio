import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Projects from './Pages/Projects';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/contact' element ={<Contact />} />
        <Route path='/about' element ={<About />} />
        <Route path='/projects' element ={<Projects />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
