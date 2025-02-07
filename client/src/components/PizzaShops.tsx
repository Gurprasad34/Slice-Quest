import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PizzaShopList from '../components/PizzaShops';
import { fetchPizzaShopsByType } from '../utils/api';
import PizzaShop from './PizzaShop';
interface IPizzaShop {
  id: number;
  name: string;
  location: string;
  address: string;
  phone: string;
  website: string;
}
const PizzaShops = ({shops}) => {
  const { pizzaType } = useParams();
  return (
    <div>
      <h1>{pizzaType} Pizza Shops</h1>
      <div className="pizza-shop-list">
        {shops.map((shop: IPizzaShop) => (
          <PizzaShop key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default PizzaShops;
