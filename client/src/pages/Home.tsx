import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  const pizzaTypesArray = [
    {
      id: 1,
      pizzaType: "Cheese",
      imageUrl: "/images/Gemini_Generated_Image_1lkrzw1lkrzw1lkr.jpeg",
    },
    {
      id: 2,
      pizzaType: "Meat Lovers",
      imageUrl: "/images/Gemini_Generated_Image_3l4f0g3l4f0g3l4f.jpeg",
    },
    {
      id: 3,
      pizzaType: "Margherita",
      imageUrl: "/images/Gemini_Generated_Image_3hf9h73hf9h73hf9.jpeg",
    },
    {
      id: 4,
      pizzaType: "Buffalo Chicken",
      imageUrl: "/images/Gemini_Generated_Image_o30zmvo30zmvo30z.jpeg",
    },
    {
      id: 5,
      pizzaType: "Hawaiian",
      imageUrl: "/images/Gemini_Generated_Image_99biqt99biqt99bi.jpeg",
    },
    {
      id: 6,
      pizzaType: "Vodka",
      imageUrl: "/images/Gemini_Generated_Image_5ugrnt5ugrnt5ugr.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F1E4] p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#D32F2F] mb-6">NYC Slice Quest</h1>
        <p className="mt-4 text-lg text-[#5E5A5A]">Craving the perfect slice? Look no further!</p>
        <p className="mt-2 text-lg text-[#5E5A5A]">Discover the top pizza spots in New York for every style you crave.</p>
        <p className="mt-2 text-lg text-[#5E5A5A]">Pick your favorite pizza and find the best places to get it.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {pizzaTypesArray.map((slice) => (
          <Link
            key={slice.id}
            to={`/pizza-shops/${encodeURIComponent(slice.pizzaType)}`}
            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={slice.imageUrl}
              alt={slice.pizzaType}
              className="w-48 h-48 object-cover rounded-lg shadow-md"
            />
            <h2 className="mt-4 text-xl font-semibold text-[#D32F2F] hover:text-[#9C2A2A]">
              {slice.pizzaType}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
