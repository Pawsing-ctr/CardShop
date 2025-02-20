"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import IProduct from "@/app/types/product";
import "./ProductSlider.css";
import { getProducts } from "@/app/api/apiProducts";
import TrolleySVG from "@/app/assets/petsFoodCategoriesAssets/TrolleySVG";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const ProductSlider = ({ className = "" }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    productDesignation();
  }, []);

  const productDesignation = async () => {
    const getServerProducts = await getProducts();
    setProducts(getServerProducts);
  };

  return (
    <div className={`all-product-slider ${className}`}>
      <div className="slider-title">
        <p className={`${roboto.className} + product-slider-title`}>
          Самые проводаемые продукты
        </p>
        {products.length < 4 ? (
          ""
        ) : (
          <div>
            <button className="" onClick={scrollPrev}>
              &#8592;
            </button>
            <button className="" onClick={scrollNext}>
              &#8594;
            </button>
          </div>
        )}
      </div>
      {products.length < 4 ? (
        <div className="slider-product">
          {products.map((product) => (
            <div className="product-element" key={product.id}>
              <Link href={`${product.id}`}>
                <img
                  src={`http://localhost:3005/api/products/${product.id}/image`}
                  alt={product.name}
                  className="product-image"
                />
              </Link>
              <div className="all-product-active">
                <div className="all-product-information">
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">{product.price} ₽</p>
                </div>
                {/* <p className="product-description">{product.description}</p> */}
                <div className="trolley-img">
                  <TrolleySVG />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="product-list" ref={emblaRef}>
          <div className="slider-product">
            {products.map((product) => (
              <div className="product-element" key={product.id}>
                <Link href={`${product.id}`}>
                  <img
                    src={`http://localhost:3005/api/products/${product.id}/image`}
                    alt={product.name}
                    className="product-image"
                  />
                </Link>
                <div className="all-product-active">
                  <div className="all-product-information">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price} ₽</p>
                  </div>
                  <div className="trolley-img">
                    <TrolleySVG />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSlider;
