




import Modal from "../components/modal.jsx"
import { useState, useEffect } from "react";








export default function Services() { 

const [isOpen, setIsOpen] = useState(false);
const [images, setImages] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);
const [carouselImages, setCarouselImages] = useState([]);
const [modalImages, setModalImages] = useState([]);

  const [prestationImages, setPrestationImages] = useState([]);

useEffect(() => {
  fetch(
    "http://127.0.0.1:8000/api/images?type=Prestation&order%5BordreAffichage%5D=asc"
  )
    .then((response) => response.json())
    .then((data) => {
      setPrestationImages(data.member);
    });
}, []);

 useEffect(() => {

  


  fetch("http://127.0.0.1:8000/api/images?type=PrestationModale&order%5BordreAffichage%5D=asc")
    .then(response => response.json())
    .then(data => {
      setModalImages(data.member);
    });

}, []);


function openModal(imagesArray) {
  console.log("Images envoyées à la modale :", imagesArray);
  setImages(imagesArray);
  setCurrentIndex(0);
  setIsOpen(true);
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
function getImagesByPrefix(prefix) {
  return modalImages
    .filter(image => image.url.includes(prefix))
    .sort((a, b) => a.ordreAffichage - b.ordreAffichage);
}

  return (
   
  <div>
    <h1>Nos prestations</h1>

    <div className="container-services">
      <div className="services-wrapper">

        <div className="service-card-1">
          
        {prestationImages[0] && (
  <img
    src={`http://127.0.0.1:8000/${prestationImages[0].url}`}
    alt={prestationImages[0].description}
    className="conception"
  />
)}        

          <h2>Conception et réalisation<br/>d'espaces verts </h2>

      <button onClick={() => openModal(getImagesByPrefix("carousel"))}>
  voir réalisations
</button>
        </div>

        <div className="service-card-2">
         {prestationImages[1] && (
  <img
    src={`http://127.0.0.1:8000/${prestationImages[1].url}`}
    alt={prestationImages[1].description}
    className="maintenance"
  />
)}
          <h2>Entretien des espaces verts</h2>

          <button onClick={() => openModal(getImagesByPrefix("maintenance"))}>
  voir réalisations
</button>
        </div>

        <div className="service-card-3">
          {prestationImages[2] && (
  <img
    src={`http://127.0.0.1:8000/${prestationImages[2].url}`}
    alt={prestationImages[2].description}
    className="trimming"
  />
)}
          <h2>Taille des haies</h2>

        
<button onClick={() => openModal(getImagesByPrefix("trimming"))}>
  voir réalisations
</button>
        </div>

        <div className="service-card-4 bottom">
          {prestationImages[3] && (
  <img
    src={`http://127.0.0.1:8000/${prestationImages[3].url}`}
    alt={prestationImages[3].description}
    className="tree-felling"
  />
)}
          <h2>Élagage et abattage d’arbres</h2>

       
<button onClick={() => openModal(getImagesByPrefix("tree-felling"))}>
  voir réalisations
</button>
        </div>

        <div className="service-card-5 bottom">
         {prestationImages[4] && (
  <img
    src={`http://127.0.0.1:8000/${prestationImages[4].url}`}
    alt={prestationImages[4].description}
    className="composting"
  />
)}
          <h2>Valorisation des déchets verts<br/>(Compostage)</h2>

          <button onClick={() => openModal(getImagesByPrefix("composting"))}>
  voir réalisations
</button>
        </div>

      </div>
    </div>

    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {images.length > 0 && (
        <div className="slider">
          <button onClick={prevImage}>⬅</button>

          <img
            src={`http://127.0.0.1:8000/${images[currentIndex].url}`}
            alt={images[currentIndex].description}
          />

          <button onClick={nextImage}>➡</button>
        </div>
      )}
    </Modal>
  </div>
);
}
