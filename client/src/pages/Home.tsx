import React from "react";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Welcome to NYC Slice Quest!
      </h1>
      <p>With so many rankings of New York's best pizza, it's easy to get lost in the sauce.</p> 
<p>But how do you find the slice you're craving? Enter NYC Slice Quest.</p> 
<p>Select your favorite style below, and we'll show you the top spots in the city that perfect it.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pizzaTypesArray.map((slice) => (
          <Link
          key={slice.id}
          to={`/pizza-shops/${encodeURIComponent(slice.pizzaType)}`}
          className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
            <img
              src={slice.imageUrl}
              alt={slice.pizzaType}
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            />
            <h2 className="mt-3 text-lg font-semibold text-gray-800">
              {slice.pizzaType}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
