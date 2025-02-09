import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PizzaShop from '../components/PizzaShop';

interface IPizzaShop {
  id: number;
  name: string;
  location: string;
  address: string;
  phone: string;
  website: string;
}

const PizzaShops = () => {
  const [shops, setShops] = useState<IPizzaShop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const pizzaType = searchParams.get('type');

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/pizza-shops?type=${encodeURIComponent(pizzaType || '')}`);
        if (!response.ok) throw new Error('Failed to fetch pizza shops');
        const data = await response.json();
        setShops(data);
      } catch (err) {
        setError('Error fetching pizza shops.');
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, [pizzaType]);

  if (loading) return <p className="text-center">Loading pizza shops...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (shops.length === 0) return <p className="text-center text-gray-600">No pizza shops found for {pizzaType}.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-red-600">{pizzaType} Pizza Shops</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {shops.map((shop) => (
          <PizzaShop key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default PizzaShops;