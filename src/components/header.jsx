import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-canopees.png";

export default function Header() {

  const [open, setOpen] = useState(false);
  

const location = useLocation();

useEffect(() => {
  setOpen(false);
}, [location]);

  return (
    <header className="header">
      <div className="header-2">
      <div>
       <img className="logo" src={Logo} alt="Logo Canopées" />
       <p className="logo-text">Création et entretien d'espaces verts</p>
      </div>
      <div/>
        <div className="burger" onClick={() => {
  console.log("click");
  setOpen(!open);
}}>
          ☰
        </div>
      <div className={`menu ${open ? "active" : ""}`}>
      <nav>
        <ul>
         <li><Link to="/">ACCUEIL</Link></li>
         <li><Link to="/about">QUI SOMMES NOUS ?</Link></li> 
         <li><Link to="/services">NOS PRESTATIONS</Link></li>
         <li><Link to="/pricing">TARIFS</Link></li>
         <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
      </div>
      </div>
    </header>
  );
}