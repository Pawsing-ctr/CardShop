"use client";
import { petsFoodCategoriesConst } from "@/app/constants/petsFoodCategoriesConst";
import "../PetsFoodCategories/PetsFoodCategories.css";
import { useEffect, useState } from "react";
import IProduct from "@/app/types/product";
import { getProducts } from "@/app/api/apiProducts";

const PetsFoodCategories = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);

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
      <ul>
        {products.map((el, index) => (
          <div key={index}>
            <img src={el.photo} alt="" />
            <p>{el.name}</p>
            <p>{el.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PetsFoodCategories;
