import { Link } from "react-router-dom";
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import TicTac from "../assets/tic-tac.png"


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
       <h3>CONTACT</h3>
       <p>23 rue des Peupliers</p>
       <p>31170 Toulouse</p>
       <p>05 42 68 95 72</p>
       <p>canopées@contact.com</p>
       <h3>Retrouvez nous sur nos réseaux</h3>
       <div className="social-media">
       <a href="#" target="_blank" aria-label="Visiter la page Facebook de Canopées"><img src={Facebook} alt="Facebook"/> </a>
       <a href="#" target="_blank" aria-label="Visiter la page Instagram de Canopées"><img src={Instagram} alt="Instagram"/> </a>
       <a href="#" target="_blank" aria-label="Visiter la page TikTok de Canopées"><img src={TicTac} alt="Tiktok"/> </a>
       </div>
       </div>
      <div className="below-footer">
       <Link to="/cgu">CGU</Link>
       <Link to="/cgv">CGV</Link>
       <Link to="/legal-mentions">Mentions légales</Link>
       <p>Copyright : © 2026 Canopées – Tous droits réservés</p>
      </div>
    </footer>
  );
}
       
