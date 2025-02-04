import { petsFoodCategoriesConst } from "@/app/constants/petsFoodCategoriesConst";
import "./PetsFoodCategories.css";

const PetsFoodCategories = () => {
  return (
    <div className="all-petsFoodCategories">
      <p className="petsFoodCategories-title">Категории</p>
      <div className="all-categories-block">
        {petsFoodCategoriesConst.map((el) => {
          return (
            <div className="one-categorie" key={el.id}>
              <img
                className="categories-image"
                src={el.imgBackground}
                alt="#"
              />
              <p className="title-categories">{el.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PetsFoodCategories;
