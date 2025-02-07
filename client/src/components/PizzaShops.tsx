import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PizzaShopItem from '../components/PizzaShopItem';
import { fetchPizzaShopsByType } from '../utils/api';

const PizzaShops = () => {
  const { pizzaType } = useParams();
  const [pizzaShops, setPizzaShops] = useState<any[]>([]);

  useEffect(() => {
    const getPizzaShops = async () => {
      if (pizzaType) {
        const data = await fetchPizzaShopsByType(pizzaType);
        setPizzaShops(data);
      }
    };
    getPizzaShops();
  }, [pizzaType]);

  return (
    <div>
      <h1>{pizzaType} Pizza Shops</h1>
      <div className="pizza-shop-list">
        {pizzaShops.map((shop) => (
          <PizzaShopItem key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default PizzaShops;
