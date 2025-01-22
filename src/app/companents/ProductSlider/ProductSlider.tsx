"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import IProduct from "@/app/types/product";
import "./ProductSlider.css";
import { getProducts } from "@/app/api/apiProducts";

const ProductSlider = () => {
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
    <div className="all-product-slider">
      <div className="product-list" ref={emblaRef}>
        <div className="slider-product">
          {products.map((product) => (
            <div key={product.id}>
              <img
                src={product.photo || "/placeholder.svg"}
                alt={product.name}
                className="product-image"
              />
              <p className="product-name">{product.name}</p>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        onClick={scrollPrev}
      >
        &#8592; {/* Left arrow */}
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        onClick={scrollNext}
      >
        &#8594; {/* Right arrow */}
      </button>
    </div>
  );
};

export default ProductSlider;
