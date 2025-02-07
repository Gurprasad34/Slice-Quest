
import React from 'react';

interface PizzaSliceImageProps {
  slice: {
    name: string;
    imageUrl: string;
  };
}

const PizzaSliceImage = ({ slice }: PizzaSliceImageProps) => {
  return (
    <div className="pizza-slice-card">
      <img src={slice.imageUrl} alt={slice.name} />
      <h3>{slice.name}</h3>
    </div>
  );
};

export default PizzaSliceImage;
