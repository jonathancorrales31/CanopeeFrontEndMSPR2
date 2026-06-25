import ImageAboutUs from "../assets/bob-et-tom.png"
import Bob from "../assets/bob.png"
import Tom from "../assets/tom.png"
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="about-us-image-card">
      <img className="image-about-us" src={ImageAboutUs} alt="Une photo sympathique de Bob et Tom"/>
      <Link className="btn-overlay" to="/contact">Contactez nous</Link>
      </div>
      <h1>Bob et Tom à votre service</h1>
    <div className="bob-card">
      <div className="bob-bio">
      <h2>Bob</h2>
      <p>Bob est un paysagiste expérimenté, reconnu pour son savoir-faire et son efficacité sur le terrain. Polyvalent et engagé, il intervient sur tous types de projets d’aménagement avec sérieux et professionnalisme. Son objectif : créer des espaces extérieurs fonctionnels, soignés et adaptés à chaque client.</p>
      <p>Avec Tom, il a cofondé Canopées, une entreprise née de leur passion commune pour le paysage et leur envie de proposer des réalisations durables, alliant technique et sens esthétique.</p>
      </div>
      <div className="bob-image">
       <img  src={Bob} alt="Photo de Bob"/>
      </div>
    </div>
    <div className="tom-card">
      <div className="tom-bio">
      <h2>Tom</h2>
      <p>Passionné par la nature depuis toujours, Tom est un paysagiste rigoureux et créatif. Il aime transformer les espaces extérieurs en lieux harmonieux et vivants, en accord avec l’environnement. Grâce à son sens du détail et son écoute des besoins, il conçoit des jardins à la fois esthétiques et durables.</p>
      <p>Co-fondateur de la société Canopées, il met son expertise au service de projets sur mesure, avec l’ambition de réinventer les espaces verts et de rapprocher chacun de la nature.</p>
      </div>
      <div className="tom-image">
       <img src={Tom} alt="Photo de Tom"/>
      </div>

    </div>
    </div>
  );
}