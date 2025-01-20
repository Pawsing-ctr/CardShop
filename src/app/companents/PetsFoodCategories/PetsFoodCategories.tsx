"use client";
import { petsFoodCategoriesConst } from "@/app/constants/petsFoodCategoriesConst";
import "./PetsFoodCategories.css";
import { useEffect, useState } from "react";
import { getProducts } from "@/app/api/apiProducts";
import IProduct from "@/app/types/product";
import ProductSlider from "../ProductSlider/ProductSlider";

const PetsFoodCategories = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  console.log(products);

  useEffect(() => {
    productDesignation();
  }, []);

  const productDesignation = async () => {
    const getServerProducts = await getProducts();
    setProducts(getServerProducts);
  };

  return (
    <div className="all-petsFoodCategories">
      <div className="petsFoodCategories-title">
        <p className="title">Pets Food Categories</p>
        <p className="petsFood-view">view all</p>
      </div>
      <div className="all-petsCategories">
        {petsFoodCategoriesConst.map((el) => {
          return (
            <div key={el.id}>
              <div className="petsCategories-icon">{el.imgComponent}</div>
              <p className="categories-text">{el.title}</p>
            </div>
          );
        })}
      </div>
      <ul className="products-list">
        {/* {products.map((product) => (
          <li key={product.id} className="product-item">
            <img
              src={product.photo || "/placeholder.svg"}
              alt={product.name}
              className="product-image"
            />
            <p className="product-name">{product.name}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
          </li>
        ))} */}
      </ul>
      <ProductSlider products={products} />
    </div>
  );
};

export default PetsFoodCategories;
