import type React from "react";
import PetsFoodCategories from "../PetsFoodCategories/PetsFoodCategories";
import ProductSlider from "../ProductSlider/ProductSlider";
import "./Body.css";
import FooterHomePage from "../FooterHomePage/FooterHomePage";
import PageBlockWrapper from "../PageBlockWrapper/PageBlockWrapper";
import { Colors } from "@/app/constants/colors";

const Body: React.FC = () => {
  return (
    <>
      <PageBlockWrapper style={{ flex: 1 }}>
        <PetsFoodCategories />
        <ProductSlider />
      </PageBlockWrapper>
      <PageBlockWrapper backgroundColor={Colors.backgroundColorGray}>
        <ProductSlider className="popular-slider" />
        <FooterHomePage />
      </PageBlockWrapper>
    </>
  );
};

export default Body;
