interface IPizzaShop {
  id: number;
  name: string;
  location: string;
  address: string;
  phone: string;
  website: string;
  description: string
  addedBy: string;
}

const PizzaShop = ({ shop }: { shop: IPizzaShop }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold text-gray-800">{shop.name}</h2>
      <p className="text-gray-800">{shop.description}</p>
      <p className="text-gray-700">{shop.address}</p>
      <p className="text-gray-600">📞 {shop.phone}</p>
      <p className="text-gray-600">Suggested by: {shop.addedBy}</p>
      {shop.website && (
        <a href={shop.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Visit Website
        </a>
      )}
    </div>
  );
};

export default PizzaShop;
