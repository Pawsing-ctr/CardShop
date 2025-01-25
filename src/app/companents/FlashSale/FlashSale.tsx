"use client";
import React, { useEffect, useState } from "react";
import "./FlashSale.css";
import { getProducts } from "@/app/api/apiProducts";
import IProduct from "@/app/types/product";

const FlashSale = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);

  useEffect(() => {
    productDesignation();
  }, []);

  const productDesignation = async () => {
    const getServerProducts = await getProducts();
    setProductList(getServerProducts);
  };
  return (
    <div className="flash-sale-block">
      <div className="flash-sale-offer">
        <p className="flash-sale-title">Flash Sale</p>
        <div className="flash-sale-offer-text">
          <button className="flash-sale-offer-button">40% offer</button>
          <button className="flash-sale-offer-button">christmas offer</button>
          <button className="flash-sale-offer-button">hand picked</button>
          <button className="flash-sale-offer-button">Best sell</button>
          <button className="flash-sale-offer-button">recently added</button>
        </div>
      </div>
      <div className="flash-sale-product">
        <div className="slider-product">
          {productList.map((product) => (
            <div key={product.id}>
              <img
                src={product.photo || "/placeholder.svg"}
                alt={product.name}
                className="product-image"
              />
              <p className="product-name">{product.name}</p>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price} ₽</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
