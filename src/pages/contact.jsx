export default function Contact() {
  return (
    <div>
      <h1>CONTACTEZ NOUS</h1>
    <div className="form-card">
      <h2>Demandez un devis</h2>
      <form className="form">

  <label htmlFor="firstname">PRÉNOM</label>
  <input type="text" id="firstname" placeholder="Louis" />

  <label htmlFor="lastname">NOM</label>
  <input type="text" id="lastname" placeholder="Leblanc" />

  <label htmlFor="address">ADRESSE</label>
  <input type="text" id="address" placeholder="7 rue des Bouleaux" />

  <label htmlFor="email">EMAIL</label>
  <input type="email" id="email" placeholder="Example@mail.com" />

  <label htmlFor="phonenumber">TÉLÉPHONE</label>
  <input type="tel" id="phonenumber" placeholder="0675826145" />

  <label htmlFor="prestation">PRESTATION SOUHAITÉE</label>

  <select id="prestation" name="prestation">
    <option value="conception">Conception et réalisation d'espaces verts</option>
    <option value="maintenance">Entretien des espaces verts</option>
    <option value="trimming">Taille des haies</option>
    <option value="tree-felling">Élagage et abattage d'arbres</option>
    <option value="composting">Valorisation des déchets verts (compostage)</option>
    <option value="information">Demande de renseignement</option>
  </select>

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