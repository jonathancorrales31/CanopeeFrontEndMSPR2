
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


export default function About() {

  
  const [coverImage, setCoverImage] = useState(null);
  const [bioImages, setBioImages] = useState([]);
  const [textes, setTextes] = useState([]);

useEffect(() => {
  fetch("http://127.0.0.1:8000/api/images?type=Couverture")
    .then(response => response.json())
    .then(data => {
      setCoverImage(data.member[0]);
    });

  fetch("http://127.0.0.1:8000/api/images?type=bio&order%5BordreAffichage%5D=asc")
    .then(response => response.json())
    .then(data => {
      setBioImages(data.member);
    });

    fetch("http://127.0.0.1:8000/api/texts")
  .then(response => response.json())
  .then(data => {
    setTextes(data.member);
  });
}, []);



  const bobImage = bioImages.find(
  image => image.ordreAffichage === 1
);

const tomImage = bioImages.find(
  image => image.ordreAffichage === 2
);
const bioBob = textes.find(
  texte => texte.type === "BobBio"
);

const bioTom = textes.find(
  texte => texte.type === "TomBio"
);

  return (

  

    <div>
      <div className="about-us-image-card">
      {coverImage && (
  <img className="image-about-us"
    src={`http://127.0.0.1:8000/${coverImage.url}`}
    alt={coverImage.description}
    
  />
)}
      <Link className="btn-overlay" to="/contact">Contactez nous</Link>
      </div>
      <h1>Bob et Tom à votre service</h1>
    <div className="bob-card">
      <div className="bob-bio">
      {bioBob && (
  <>
    <h2>{bioBob.titre}</h2>
    <div dangerouslySetInnerHTML={{ __html: bioBob.contenu }} />
  </>
)}
      </div>
      <div className="bob-image">
        {bobImage && (
    <img
      src={`http://127.0.0.1:8000/${bobImage.url}`}
      alt={bobImage.description}
    />
  )}
      <div>
  
</div>
      </div>
    </div>
    <div className="tom-card">
      <div className="tom-bio">
      {bioTom && (
  <>
    <h2>{bioTom.titre}</h2>
    <div dangerouslySetInnerHTML={{ __html: bioTom.contenu }} />
  </>
)}
      </div>
      <div className="tom-image">
        {tomImage && (
    <img
      src={`http://127.0.0.1:8000/${tomImage.url}`}
      alt={tomImage.description}
    />
  )}
     <div>
  
</div>
      </div>

    </div>
    </div>
  );
}