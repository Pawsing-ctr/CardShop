"use client"
import { petsFoodCategoriesConst } from "@/app/constants/petsFoodCategoriesConst";
import "../PetsFoodCategories/PetsFoodCategories.css"

const PetsFoodCategories = () => {
  
  return (
    <div className="all-petsFoodCategories">
      <div className="petsFoodCategories-title">
        <p className="title">Pets Food Categories</p>
        <p className="petsFood-view">view all</p>
      </div>
      <div className="all-petsCategories">
        {petsFoodCategoriesConst.map((el) => {
          return <div key={el.id}>
            <div className="petsCategories-icon">
            {el.imgComponent}
            </div>
            <p className="categories-text">{el.title}</p>
          </div>
        })}
      </div>
      {/* <button onClick={() => setIsModalOpen(true)}>Открыть модалку</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Привет из модального окна!</h2>
        <p>Здесь можно разместить любой контент.</p>
      </Modal> */}
    </div>
  );
};

export default PetsFoodCategories;
