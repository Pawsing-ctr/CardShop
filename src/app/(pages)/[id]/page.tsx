"use client";
import "./page.css";
import Link from "next/link";
import FooterHomePage from "@/app/companents/FooterHomePage/FooterHomePage";
import PageBlockWrapper from "@/app/companents/PageBlockWrapper/PageBlockWrapper";
import { Colors } from "@/app/constants/colors";
import CardElement from "@/app/companents/CardElement/CardElement";
import QuantityElement from "@/app/companents/QuantityElement/QuantityElement";
import CardCheckbox from "@/app/companents/CardCheckbox/CardCheckbox";

const ClientComponent = () => {
  return (
    <>
      <PageBlockWrapper style={{ flex: 1 }}>
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
                <p>Вернуться обратно</p>
              </Link>
            </button>
          </div>
        </div>
      </PageBlockWrapper>
      <PageBlockWrapper backgroundColor={Colors.backgroundColorGray}>
        <FooterHomePage />
      </PageBlockWrapper>
    </>
  );
};
export default ClientComponent;
