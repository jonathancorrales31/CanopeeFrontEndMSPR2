import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "../components/carousel";




export default function Home() {

  const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

  if (images.length === 0) return;

  const interval = setInterval(() => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, 4000);

  return () => clearInterval(interval);

}, [images]);

  useEffect(() => {
  fetch("http://127.0.0.1:8000/api/images?type=Slider&order[ordreAffichage]=asc")
    .then(response => response.json())
    .then(data => {
      setImages(data.member);
    });
}, []);
if (images.length === 0) {
  return <p>Chargement...</p>;
}

function nextImage() {
  setCurrentIndex((prev) =>
    prev === images.length - 1 ? 0 : prev + 1
  );
}

function prevImage() {
  setCurrentIndex((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );

  
}
  return (
    <div>

      <div className="slider-card home-slider">
        <button onClick={prevImage}>⟨</button>

        {images[currentIndex] && (
  <img
  src={`http://127.0.0.1:8000/${images[currentIndex].url}`}
  alt={images[currentIndex].description}
  
/>
)}

        <button onClick={nextImage}>⟩</button>
        <Link className="btn-overlay" to="/services">Découvrir nos prestations</Link>
      </div>

      <h1>la société Canopées</h1>

      <div className="card-presentation">
        <p>Canopées a été créée en 2020 par Bob et Tom, 2 amoureux de la nature.
           La société est spécialisée dans la création et l’entretien d’espaces verts pour les
           particuliers, les professionnels et les collectivités territoriales.</p>

        <p>Les activités de la société sont les suivantes :</p>

        <ul>
          <li>Conception et réalisation d’espace verts</li>
          <li>Entretien des espaces verts</li>
          <li>Taille des haies</li>
          <li>Élagage et abattage d'arbres</li>
          <li>Valorisation des déchets verts</li>
        </ul>

        <Link className="btn" to="/pricing">Voir nos tarifs</Link>
      </div>

      <div className="green-card">
        <h2>A QUI S’ADRESSE NOS SERVICES ?</h2>
        <p>Que vous soyez un particulier, une entreprise ou une collectivité territoriale, c’est avec plaisir que nous viendrons mettre notre expertise pour prendre soin de vos espaces verts.</p>

        <Link className="btn" to="/contact">Contactez nous</Link>
      </div>

      <div className="caroussel">
        <h2 className="caroussel-title">Nos dernières réalisations</h2>
        <Carousel/>
        <div className="dots">
         <span className="dot"></span>
         <span className="dot"></span>
         <span className="dot active"></span>
         <span className="dot"></span>
         <span className="dot"></span>
        </div>
      </div>

    </div>
  );
}