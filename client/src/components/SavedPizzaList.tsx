import React from 'react';
import { Link } from 'react-router-dom';

interface SavedPizzaListProps {
  pizzaShops: any[];
}

const SavedPizzaList = ({ pizzaShops }: SavedPizzaListProps) => {
  return (
    <div>
      <h2> Your Saved Pizza Shops!</h2>
      <ul>
        {pizzaShops.map((shop) => (
          <li key={shop.id}>
            <Link to={`/pizzaShops/${shop.name}`}>
              {shop.name} - {shop.location}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedPizzaList;
