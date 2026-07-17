import { useEffect, useState } from "react";



export default function Pricing()


{

  
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

  return (
    <div>
     <h1>Nos tarifs</h1>
     <div className="prices-card">
      <label typeof="table" id="prices"/>
      <table>
           <thead>
            <tr>
              <th>Prestation</th>
              <th>Prix</th>
            </tr>
          </thead>
        <tbody>
        {prestations.map((prestation) => (
              <tr key={prestation.id}>
                <td>{prestation.name}</td>
                <td>{prestation.price}</td>
              </tr>
            ))}
       </tbody>
      </table>
     
     </div>
    </div>
  );
}
          