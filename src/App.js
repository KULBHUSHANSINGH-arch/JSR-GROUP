import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navbar/Navigation';
import Footer from './Components/Navbar/Footer/Footer';
import Home from './Components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Card from './Components/Services/Card';


function App() {
  return (
    <Router>
      
   <Navigation />

   <Home />

   <Card />

   <Footer/>

    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
