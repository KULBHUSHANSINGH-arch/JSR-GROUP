import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navbar/Navigation';
import Footer from './Components/Navbar/Footer/Footer';
import Home from './Components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <Router>
      
   {/* <Navigation /> */}
   {/* <Footer/> */}

   <Home />


    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
