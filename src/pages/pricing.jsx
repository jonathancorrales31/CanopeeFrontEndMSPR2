export default function Pricing() {
  return (
    <div>
     <h1>Nos tarifs</h1>
     <div className="prices-card">
      <label typeof="table" id="prices"/>
      <table>
        <tbody>
        <tr>
          <th>Prestation</th>
          <th>Prix</th>
        </tr>
        <tr>
          <td>Conception et réalisation d'espaces verts</td>
          <td>20€ à 50€/m²</td>
        </tr>
        <tr>
          <td>Entretien des espaces verts</td>
          <td>30€ à 40€/h</td>
        </tr>
        <tr>
          <td>Taille des haies</td>
          <td>8€ à 15€/m</td>
        </tr>
        <tr>
          <td>Élagage et abattage d’arbres</td>
          <td>120€ à 500€ /arbre</td>
        </tr>
        <tr>
          <td>Valorisation des déchets verts (compostage)</td>
          <td>40€ à 100€</td>
        </tr>
       </tbody>
      </table>
     
     </div>
    </div>
  );
}
          