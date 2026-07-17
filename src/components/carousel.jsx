import { useState } from "react";
import { useEffect } from "react";




 

export default function Carousel() {
  const [images, setImages] = useState([]);
useEffect(() => {

  fetch("http://127.0.0.1:8000/api/images?type=Carousel&order[ordreAffichage]=asc")
    .then(response => response.json())
    .then(data => {
  setImages(data.member);
});
  }, []);
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
  if (images.length === 0) {
    return [];
  }

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
          
          {getVisibleImages().map((image) => (
            <img
              key={image.id}
              src={`http://127.0.0.1:8000/${image.url}`}
              alt={image.description}
            />
          ))}
        </div>
      </div>

      <button onClick={next}>⟩</button>
    </div>
  );
}