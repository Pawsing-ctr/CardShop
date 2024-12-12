import { petsFoodCategoriesConst } from "@/app/constants/petsFoodCategoriesConst";
import React from "react";

const PetsFoodCategories: React.FC = () => {
  return (
    <div className="all-petsFoodCategories">
      <div className="petsFoodCategories-title">
        <p>Pets Food Categories</p>
        <p>view all</p>
      </div>
      <div>
        {petsFoodCategoriesConst.map((el) => {
          return <div key={el.id}>
            {el.imgComponent}
            <p>{el.title}</p>
          </div>
        })}
        PetsFoodCategories
      </div>
    </div>
  );
};

export default PetsFoodCategories;
