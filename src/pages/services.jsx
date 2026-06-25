import Conception from "../assets/conception.jpg"
import Maintenance from "../assets/maintenance.jpg"
import Trimming from "../assets/trimming.jpg"
import TreeFelling from "../assets/tree-felling.jpg"
import Composting from "../assets/composting.jpg"
import Garden1 from "../assets/carousel1.jpg"
import Garden2 from "../assets/carousel2.jpg"
import Garden3 from "../assets/Carousel3.jpg"
import Maintenance1 from "../assets/maintenance1.jpg"
import Maintenance2 from "../assets/maintenance2.jpg"
import Maintenance3 from "../assets/maintenance3.jpg"
import Trimming1 from "../assets/trimming1.jpg"
import Trimming2 from "../assets/trimming2.jpg"
import Trimming3 from "../assets/trimming3.jpg"
import TreeFelling1 from "../assets/tree-felling1.jpg"
import TreeFelling2 from "../assets/tree-felling2.jpg"
import TreeFelling3 from "../assets/tree-felling3.jpg"
import Composting1 from "../assets/composting1.jpg"
import Composting2 from "../assets/composting2.jpg"
import Composting3 from "../assets/composting3.jpg"
import Modal from "../components/modal.jsx"
import { useState } from "react"








export default function Services() { 

const [isOpen, setIsOpen] = useState(false);
const [images, setImages] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);

function openModal(imagesArray) {
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


  return (
   
  <div>
    <h1>Nos prestations</h1>

    <div className="container-services">
      <div className="services-wrapper">

        <div className="service-card-1">
          <img src={Conception} className="conception" alt="Un beau jardin"/>
          <h2>Conception et réalisation<br/>d'espaces verts </h2>

          <button onClick={() => openModal([Garden1, Garden2, Garden3])}>
            voir réalisations
          </button>
        </div>

        <div className="service-card-2">
          <img src={Maintenance} className="maintenance" alt="Un homme passant le rotofil"/>
          <h2>Entretien des espaces verts</h2>

          <button onClick={() => openModal([Maintenance1, Maintenance2, Maintenance3])}>
            voir réalisations
          </button>
        </div>

        <div className="service-card-3">
          <img src={Trimming} className="trimming" alt="Un homme taillant une haie"/>
          <h2>Taille des haies</h2>

          <button onClick={() => openModal([Trimming1, Trimming2, Trimming3])}>
            voir réalisations
          </button>
        </div>

        <div className="service-card-4 bottom">
          <img src={TreeFelling} className="tree-felling" alt="un homme élaguant un arbre devant une maison"/>
          <h2>Élagage et abattage d’arbres</h2>

          <button onClick={() => openModal([TreeFelling1, TreeFelling2, TreeFelling3])}>
            voir réalisations
          </button>
        </div>

        <div className="service-card-5 bottom">
          <img src={Composting} className="composting" alt="Des mains tenant du terreau"/>
          <h2>Valorisation des déchets verts<br/>(Compostage)</h2>

          <button onClick={() => openModal([Composting1, Composting2, Composting3])}>
            voir réalisations
          </button>
        </div>

      </div>
    </div>

    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {images.length > 0 && (
        <div className="slider">
          <button onClick={prevImage}>⬅</button>

          <img src={images[currentIndex]} alt="" />

          <button onClick={nextImage}>➡</button>
        </div>
      )}
    </Modal>
  </div>
);
}
