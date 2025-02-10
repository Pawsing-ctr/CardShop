import type React from "react";
import PetsFoodCategories from "../PetsFoodCategories/PetsFoodCategories";
import ProductSlider from "../ProductSlider/ProductSlider";
import "./Body.css";
import FooterHomePage from "../FooterHomePage/FooterHomePage";

const Body: React.FC = () => {
  return (
    <div className="all-page-content">
      <PetsFoodCategories />
      <ProductSlider />
      <div className="slider-and-nav">
        <ProductSlider className="popular-slider" />
        <FooterHomePage />
      </div>
    </div>
  );
};

export default Body;
