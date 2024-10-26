import { useEffect, useState } from 'react';

const BonsPage = () => {
  const [bons, setBons] = useState([]);

  useEffect(() => {
    fetch('/api/bons')
      .then((res) => res.json())
      .then((data) => setBons(data));
  }, []);

  return (
    <div>
      <h1>Liste des bons</h1>
      <ul>
        {bons.map((bon) => (
          <li key={bon.id}>
            {bon.type} - {bon.date}
            <ul>
              {bon.lignes && bon.lignes.map((ligne) => (
                <li key={ligne.id}>
                  {ligne.article_id} - {ligne.quantity} - {ligne.unit_price}€
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BonsPage;
