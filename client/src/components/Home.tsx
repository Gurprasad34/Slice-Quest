
import React from 'react';
import { Link } from 'react-router-dom';
import PizzaSliceImage from '../components/PizzaSliceImage';

const pizzaTypes = [
  { id: 1, name: 'Cheese', imageUrl: '/images/cheese-slice.jpg' },
  { id: 2, name: 'Meat Lovers', imageUrl: '/images/pepperoni-slice.jpg' },
  { id: 3, name: 'Margarita', imageUrl: '/images/margarita-slice.jpg' },
  { id: 4, name: 'Buffalo Chicken', imageUrl: '/images/buffalo-chicken-slice.jpg' },
  { id: 5, name: 'Hawaiian', imageUrl: '/images/hawaiian-slice.jpg' },
  { id: 6, name: 'Vodka', imageUrl: '/images/vodka-slice.jpg' },
];

const Home = () => {
  return (
    <div>
      <h1>Welcome to NYC Slice Quest!</h1>
      <div className="pizza-slice-container">
        {pizzaTypes.map((slice) => (
          <Link key={slice.id} to={`/pizzaShops/${slice.name}`}>
            <PizzaSliceImage slice={slice} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
