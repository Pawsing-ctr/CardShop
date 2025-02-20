"use client";
import "./page.css";
import Link from "next/link";
import FooterHomePage from "@/app/companents/FooterHomePage/FooterHomePage";
import PageBlockWrapper from "@/app/companents/PageBlockWrapper/PageBlockWrapper";
import { Colors } from "@/app/constants/colors";
import CardElement from "@/app/companents/CardElement/CardElement";
import QuantityElement from "@/app/companents/QuantityElement/QuantityElement";
import CardCheckbox from "@/app/companents/CardCheckbox/CardCheckbox";
import AnimatedWrapper from "@/app/companents/AnimatedWrapper/AnimatedWrapper";

const ClientComponent = () => {
  return (
    <>
      <PageBlockWrapper style={{ flex: 1 }}>
        <AnimatedWrapper>
          <div className="all-card">
            <div className="all-card-content">
              <CardElement />
              <QuantityElement />
            </div>
            <CardCheckbox />
            <div className="card-button-content">
              <button className="card-button">Добавить в корзину</button>
              <button className="card-button">
                <Link className="back-to-home" href={"/"}>
                  <p>Вернуться</p>
                </Link>
              </button>
            </div>
          </div>
        </AnimatedWrapper>
      </PageBlockWrapper>
      <PageBlockWrapper backgroundColor={Colors.backgroundColorGray}>
        <FooterHomePage />
      </PageBlockWrapper>
    </>
  );
};
export default ClientComponent;
