import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Product from './pages/Product';
import Til from './pages/Til';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/til' element={<Til/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
