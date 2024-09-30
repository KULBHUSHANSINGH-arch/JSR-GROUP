import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navbar/Navigation';

function App() {
  return (
    <Router>
   <Navigation />
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
