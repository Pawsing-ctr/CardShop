import React from "react";
import PetsFoodCategories from "../PetsFoodCategories/PetsFoodCategories";
import ProductSlider from "../ProductSlider/ProductSlider";
// import Container from '../Container/Container';

const Body: React.FC = () => {
  return (
    <div>
      <PetsFoodCategories />
      <ProductSlider />
    </div>
  );
};

export default Body;
