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
    <div className="border border-gray-200 p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-[#D32F2F] mb-2">{shop.name}</h2>
      <p className="text-gray-700 text-sm mb-4">{shop.description}</p>
      <p className="text-gray-600 text-sm mb-2">{shop.address}</p>
      <p className="text-gray-600 text-sm mb-2">📞 {shop.phone}</p>
      <p className="text-gray-500 text-sm mb-4">Suggested by: {shop.addedBy}</p>
      {shop.website && (
        <a href={shop.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Visit Website
        </a>
      )}
    </div>
  );
};

export default PizzaShop;
