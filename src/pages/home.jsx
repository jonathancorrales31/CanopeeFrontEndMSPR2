import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "../components/carousel";

export default function Home() {

  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textes, setTextes] = useState([]);

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

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/texts")
      .then(response => response.json())
      .then(data => {
        setTextes(data.member);
      });
  }, []);

  if (images.length === 0) {
    return <p>Chargement...</p>;
  }

  const presentation = textes.find(t => t.type === "Presentation");
  const publicTexte = textes.find(t => t.type === "PublicCible");

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

        <Link className="btn-overlay" to="/services">
          Découvrir nos prestations
        </Link>
      </div>

      <h1>La société Canopées</h1>

      <div className="card-presentation">
        {presentation && (
          <>
            <div dangerouslySetInnerHTML={{ __html: presentation.contenu }} />

            <Link className="btn" to="/pricing">
              Voir nos tarifs
            </Link>
          </>
        )}
      </div>

      <div className="green-card">
        {publicTexte && (
          <>
            <h2>{publicTexte.titre}</h2>

            <div dangerouslySetInnerHTML={{ __html: publicTexte.contenu }} />
          </>
        )}

        <Link className="btn" to="/contact">
          Contactez nous
        </Link>
      </div>

      <div className="caroussel">
        <h2 className="caroussel-title">Nos dernières réalisations</h2>

        <Carousel />

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