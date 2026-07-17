import { useState, useEffect } from "react";


export default function Contact() {

  const [prestations, setPrestations] = useState([]);
  useEffect(() => {
  fetch("http://127.0.0.1:8000/api/prestations")
    .then(response => response.json())
    .then(data => {
      setPrestations(data.member);
    })
    .catch(error => {
      console.error("Erreur API :", error);
    });
}, []);

   const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    phonenumber: "",
    prestation: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // 1 - Création du client
      const clientResponse = await fetch("http://127.0.0.1:8000/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/ld+json"
        },
        body: JSON.stringify({
          Firstname: formData.firstname,
          Lastname: formData.lastname,
          Adress: formData.address,
          Email: formData.email,
          Phonenumber: formData.phonenumber
        })
      });

      const client = await clientResponse.json();


      // 2 - Création du message
      await fetch("http://127.0.0.1:8000/api/messages", {
  method: "POST",
  headers: {
    "Content-Type": "application/ld+json"
  },
  body: JSON.stringify({
    date: new Date().toISOString(),
    lu: false,
    contenu: formData.message,
    client: client["@id"]
  })
});


      // 3 - Création du devis
// 3 - Création du devis
const devisResponse = await fetch("http://127.0.0.1:8000/api/devis", {
  method: "POST",
  headers: {
    "Content-Type": "application/ld+json"
  },
  body: JSON.stringify({
    date: new Date().toISOString(),
    statut: "En attente",
    description: formData.message,
    budget: "À définir",
    client: client["@id"]
  })
});

const devis = await devisResponse.json();


// 4 - Création du lien devis / prestation
await fetch("http://127.0.0.1:8000/api/devis_prestations", {
  method: "POST",
  headers: {
    "Content-Type": "application/ld+json"
  },
  body: JSON.stringify({
    quantité: 1,
    prix: "À définir",
    devis: devis["@id"],
    prestation: formData.prestation
  })
});

alert("Votre demande a bien été envoyée !");

} catch (error) {
  console.error(error);
  alert("Erreur lors de l'envoi");
}

};

  return (
    <div>
      <h1>CONTACTEZ NOUS</h1>
    <div className="form-card">
      <h2>Demandez un devis</h2>
      <form className="form" onSubmit={handleSubmit}>

  <label htmlFor="firstname">PRÉNOM</label>
  <input type="text" id="firstname" name="firstname" placeholder="Louis" value={formData.firstname}
  onChange={handleChange} />

  <label htmlFor="lastname">NOM</label>
  <input type="text" id="lastname" name="lastname" placeholder="Leblanc"  value={formData.lastname}
  onChange={handleChange}/>

  <label htmlFor="address">ADRESSE</label>
  <input type="text" id="address" name="address" placeholder="7 rue des Bouleaux" value={formData.address}
  onChange={handleChange} />

  <label htmlFor="email">EMAIL</label>
  <input type="email" id="email" name="email" placeholder="Example@mail.com" value={formData.email}
  onChange={handleChange} />

  <label htmlFor="phonenumber">TÉLÉPHONE</label>
  <input type="tel" id="phonenumber" name="phonenumber" placeholder="0675826145" value={formData.phonenumber}
  onChange={handleChange} />

  <label htmlFor="prestation">PRESTATION SOUHAITÉE</label>

  <select
  id="prestation"
  name="prestation"
  value={formData.prestation}
  onChange={handleChange}
>
  <option value="">Choisissez une prestation</option>

  {prestations.map((prestation) => (
    <option 
      key={prestation.id} 
      value={prestation["@id"]}
    >
      {prestation.name}
    </option>
  ))}

</select>

<label htmlFor="message">MESSAGE</label>
<textarea
  id="message"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Votre demande..."
></textarea>

  <button type="submit">Envoyer</button>

</form>
    </div>


        
    <h2 className="map-title">Plan d'accés</h2>
    <div class="map-card">
     <div class="map-header">
    📍 Canopées Paysagiste — Toulouse
    </div>

    <div class="map-body">
    <div class="road road-1">🌳 Rue des Jardins</div>

    <div class="center-point">
      🏡 Canopées<br />
      <span class="small">(12 allée des Platanes)</span>
    </div>

    <div class="road road-2">🚗 Rond-point du Canal</div>

    <div class="landmark">🌉 Canal du Midi</div>
  </div>

  <div class="map-footer">
    📌 23 rue des Peupliers, 31170 Toulouse <br />
    🚶 5 min depuis le Canal du Midi <br />
    🚗 Parking visiteurs à l’arrière
  </div>
</div>
    </div>
  );
}