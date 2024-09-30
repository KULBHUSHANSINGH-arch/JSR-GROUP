import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css";
import logo from "../../Assetes/Images/logo.jpeg"

function Navigation() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
});
const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " id="rescstomcss_1">
      <div className="brandNav">
        <img src={logo} width={60} alt="logo" />
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="me-auto navigation"
          id="navbartop"
          style={{ fontSize: "18px", width: "100%" }}
        >
          <Link to="/" onClick={handleClick} className="nav-link">Home</Link>
          
          <Link to="/Services" onClick={handleClick} className="nav-link">Services</Link>
          <Link to="/Project" onClick={handleClick} className="nav-link">Project</Link>
          <Link to="/Pricing" onClick={handleClick} className="nav-link">Pricing</Link>
          {/* <Link to="/csr" onClick={handleClick} className="nav-link">CSR</Link>
          <Link to="/blog" onClick={handleClick} className="nav-link">Blog</Link> */}
          <Link to="/contactus" onClick={handleClick} className="nav-link">Contact Us</Link>
          <Link to="/aboutus" onClick={handleClick} className="nav-link">About</Link>
          <div className="dropdown">
            <Link to="#pricing" className="dropdown-link nav-link">
              Our Team{" "}
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </Link>
            <div className="dropdown-content">
              <div className="dropdown-item" style={{ whiteSpace: 'pre-wrap' }}>
                <Link to="/arch" onClick={handleClick} className="nav-link" style={{ fontSize: "16px" }}>
                  Architectur
                </Link>
              </div>
              <hr />
              <div className="dropdown-item" style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
                <Link to="/developer's"  onClick={handleClick} className="nav-link" style={{ fontSize: "16px" }}>
                  Software Developer's
                </Link>
              </div>
            </div>
          </div>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
