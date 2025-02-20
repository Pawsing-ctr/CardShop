import type React from "react";
import PetsFoodCategories from "../PetsFoodCategories/PetsFoodCategories";
import ProductSlider from "../ProductSlider/ProductSlider";
import "./Body.css";
import FooterHomePage from "../FooterHomePage/FooterHomePage";
import PageBlockWrapper from "../PageBlockWrapper/PageBlockWrapper";
import { Colors } from "@/app/constants/colors";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";
import "./Body.css";

const Body: React.FC = () => {
  return (
    <>
      <PageBlockWrapper style={{ flex: 1 }}>
        <AnimatedWrapper>
          <PetsFoodCategories />
          <ProductSlider />
        </AnimatedWrapper>
      </PageBlockWrapper>
      <PageBlockWrapper backgroundColor={Colors.backgroundColorGray}>
        <AnimatedWrapper>
          <div className="footer-content">
            <ProductSlider className="popular-slider" />
            <FooterHomePage />
          </div>
        </AnimatedWrapper>
      </PageBlockWrapper>
    </>
  );
};

export default Body;
