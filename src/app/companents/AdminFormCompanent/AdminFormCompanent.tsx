import React from "react";
import { initialProduct } from "@/app/constants/initialConst";

interface IAdminFormCompanent {
  newProduct: typeof initialProduct;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  errors: Record<string, string>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const AdminFormCompanent: React.FC<IAdminFormCompanent> = ({
  newProduct,
  handleInputChange,
  errors,
  handleFileChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="input-addproduct-block">
      <p className="title-add-product">Добавить новый продукт</p>
      <div className="all-inputs">
        <div>
          <p className="input-title">Введите номер продукта</p>
          <input
            placeholder="Вводить тут..."
            className="base-addproduct-input"
            name="id"
            type="number"
            value={newProduct.id}
            onChange={handleInputChange}
          />
          <p className="error-text">{errors.id}</p>
        </div>
        <div>
          <p className="input-title">Введите название продукта</p>
          <input
            placeholder="Вводить тут..."
            className="base-addproduct-input"
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
          <p className="error-text">{errors.name}</p>
        </div>
        <div>
          <p className="input-title">Введите описание продукта</p>
          <textarea
            placeholder="Вводить тут..."
            className="description-addproduct-textarea"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
          />
          <p className="error-text">{errors.description}</p>
        </div>
        <div>
          <p className="input-title">Введите цену продукта</p>
          <input
            placeholder="Вводить тут..."
            className="base-addproduct-input"
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
          <p className="error-text">{errors.price}</p>
        </div>
        <div className="custom-file-input">
          <input
            onChange={handleFileChange}
            name="image"
            type="file"
            className="file-input"
          />
          <span className="file-input">Выберите файл</span>
        </div>
      </div>
      <button className="add-product-button">Добавить продукт</button>
    </form>
  );
};

export default AdminFormCompanent;
