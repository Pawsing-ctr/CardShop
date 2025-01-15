"use client";
import { petsFoodCategoriesConst } from "@/app/constants/petsFoodCategoriesConst";
import "../PetsFoodCategories/PetsFoodCategories.css";
import { useEffect, useState } from "react";
import IProduct from "@/app/types/product";
import axios from "axios";
import { apiUrl } from "@/app/constants/apiConst";

const PetsFoodCategories = () => {
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    axios.get(apiUrl).then((response) => setData(response.data));
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
        {data.map((el, index) => (
          // <li key={index}>
          //   {item.name} - {item.price} ₽
          // </li>
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
