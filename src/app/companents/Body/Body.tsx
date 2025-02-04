import React from "react";
import PetsFoodCategories from "../PetsFoodCategories/PetsFoodCategories";
// import ProductSlider from "../ProductSlider/ProductSlider";
import "./Body.css";
// import FlashSale from "../FlashSale/FlashSale";

const Body: React.FC = () => {
  return (
    <div className="all-page-content">
      <PetsFoodCategories />
      {/* <ProductSlider /> */}
      {/* <FlashSale /> */}
    </div>
  );
};

export default Body;
