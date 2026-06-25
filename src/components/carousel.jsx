import { useState } from "react";
import Carousel1 from "../assets/carousel1.jpg"
import Carousel2 from "../assets/carousel2.jpg"
import Carousel3 from "../assets/carousel3.jpg"
import Carousel4 from "../assets/carousel4.jpg"
import Carousel5 from "../assets/carousel5.jpg"
import Carousel6 from "../assets/carousel6.jpg"

const images = [
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  Carousel5,
  Carousel6,
];
 

export default function Carousel() {
  const [index, setIndex] = useState(0);
  // const visible = 3;
  const visible = window.innerWidth <= 1000 ? 1 : 3;

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // on crée les 3 images visibles
  const getVisibleImages = () => {
    let result = [];
    for (let i = 0; i < visible; i++) {
      result.push(images[(index + i) % images.length]);
    }
    return result;
  };

  return (
    <div className="carousel-wrapper">
      <button onClick={prev}>⟨</button>

      <div className="carousel-window">
        <div className="carousel-track">
          {getVisibleImages().map((img, i) => (
            <img key={i} src={img} alt="images des dernières realisations, beaux jardins et espaces verts bien entretenus" />
          ))}
        </div>
      </div>

      <button onClick={next}>⟩</button>
    </div>
  );
}