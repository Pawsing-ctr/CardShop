"use client";
import { petsFoodCategoriesConst } from "@/app/constants/petsFoodCategoriesConst";
import "./PetsFoodCategories.css";

const PetsFoodCategories = () => {
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
    </div>
  );
};

export default PetsFoodCategories;
