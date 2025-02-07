// import { useEffect, useState } from 'react';
// import { retrieveTypes } from '../api/pizzaAPI';

// interface PizzaType {
//   id: number;
//   pizzaType: string;
//   imageUrl: string;
// }

// const Home = () => {
//   const [pizzaTypes, setPizzaTypes] = useState<PizzaType[]>([]);

//   useEffect(() => {
//     const fetchPizzaTypes = async () => {
//       try {
//         const data = await retrieveTypes();
//         console.log('Fetched pizza types:', data); // Debugging
//         setPizzaTypes(data);
//       } catch (error) {
//         console.error('Error fetching pizza types:', error);
//       }
//     };

//     fetchPizzaTypes();
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to NYC Slice Quest!</h1>
//       <div className="pizza-slice-container">
//         {pizzaTypes.map((slice) => (
//           <div key={slice.id} className="pizza-item">
//             <h2>{slice.pizzaType || 'Unknown Pizza'}</h2>
//             <img src={slice.imageUrl} alt={slice.pizzaType || 'Unknown'} className="pizza-image" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';

const Home = () => {
  const pizzaTypesArray = [
    { id: 1, pizzaType: 'Cheese', imageUrl: '/images/Gemini_Generated_Image_1lkrzw1lkrzw1lkr.jpeg' },
    { id: 2, pizzaType: 'Meat Lovers', imageUrl: '/images/Gemini_Generated_Image_3l4f0g3l4f0g3l4f.jpeg' },
    { id: 3, pizzaType: 'Margherita', imageUrl: '/images/Gemini_Generated_Image_3hf9h73hf9h73hf9.jpeg' },
    { id: 4, pizzaType: 'Buffalo Chicken', imageUrl: '/images/Gemini_Generated_Image_o30zmvo30zmvo30z.jpeg' },
    { id: 5, pizzaType: 'Hawaiian', imageUrl: '/images/Gemini_Generated_Image_99biqt99biqt99bi.jpeg' },
    { id: 6, pizzaType: 'Vodka', imageUrl: '/images/Gemini_Generated_Image_5ugrnt5ugrnt5ugr.jpeg' },
  ];

  return (
    <div>
      <h1>Welcome to NYC Slice Quest!</h1>
      <div className="pizza-slice-container">
        {pizzaTypesArray.map((slice) => (
          <div key={slice.id} className="pizza-item">
            <h2>{slice.pizzaType}</h2>
            <img src={slice.imageUrl} alt={slice.pizzaType} className="pizza-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;