import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PizzaShop from "../components/PizzaShop";

interface IPizzaShop {
  id: number;
  name: string;
  location: string;
  address: string;
  description: string;
  phone: string;
  website: string;
  addedBy: string;
}

const PizzaShops = () => {
  const { type } = useParams<{ type: string }>(); // Get pizza type from URL
  const [shops, setShops] = useState<IPizzaShop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!type) {
      setError("No pizza type specified.");
      setLoading(false);
      return;
    }

    console.log("Pizza type from params:", type); // Debugging log

    const fetchShops = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";

        const requestUrl = `${baseUrl}/api/pizza/pizza-shops?type=${encodeURIComponent(type)}`;
        console.log("Fetching pizza shops from:", requestUrl); // Debugging log

        const response = await fetch(requestUrl);
        if (!response.ok) throw new Error(`Failed to fetch pizza shops: ${response.statusText}`);

        const data = await response.json();
        setShops(data);
      } catch (err) {
        console.error("Error fetching pizza shops:", err); // Debugging log
        setError("Error fetching pizza shops. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, [type]);

  if (loading) return <p className="text-center">Loading pizza shops...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (shops.length === 0)
    return (
      <p className="text-center text-gray-600">
        No pizza shops found for "{type}".
      </p>
    );

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-red-600">
        {type} Pizza Shops
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {shops.map((shop) => (
          <PizzaShop key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default PizzaShops;
