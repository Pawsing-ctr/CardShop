"use client";
import type React from "react";
import { useState, useEffect } from "react";
import "./AdminTable.css";
import { z } from "zod";
import { createProduct, getProducts } from "@/app/api/apiProducts";
import type IProduct from "@/app/types/product";
import $api from "@/app/api/$api";
import { productsPath } from "@/app/api/apiProducts/productsPath";

const productScheme = z.object({
  id: z
    .string()
    .min(1, "Id продукта обязательно")
    .refine((val) => val === val, {
      message:
        "Id нового продукта не должен совпадать с id уже существующего продукта",
    }),
  name: z.string().min(1, "Название продукта обязательно"),
  description: z.string().min(1, "Описание продукта обязательно"),
  price: z.string().min(1, "Цена на продукт обязательна"),
});

const initialProduct = {
  id: "",
  name: "",
  description: "",
  price: "",
};

const AdminTable = () => {
  // все мои данные в products
  const [products, setProducts] = useState<IProduct[]>([]);
  const [newProduct, setNewProduct] = useState(initialProduct);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    adminGetProductsList();
  }, []);

  const adminGetProductsList = async () => {
    const getServerProducts = await getProducts();
    setProducts(getServerProducts);
  };

  const handleSchemeCheckError = () => {
    const result = productScheme.safeParse(newProduct);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (typeof err.path[0] === "string") {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      console.log("Ошибка при отправке данных");
      setErrors(fieldErrors);
    } else {
      setErrors({});
    }
    return result.success;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const resultCheckError = handleSchemeCheckError();
    if (resultCheckError === false || !file) {
      return console.log("Ошибка при отправке данных");
    }

    const formData = new FormData();
    Object.entries(newProduct).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("image", file);

    try {
      const productResponse = await createProduct(formData);

      if (productResponse.data) {
        setProducts([...products, productResponse.data]);
        setNewProduct(initialProduct);
        setFile(null);
      }
    } catch (error) {
      console.error("Ошибка при создании продукта:", error);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      await $api.delete(`${productsPath.ALL_PRODUCTS}/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Ошибка при удалении продукта:", error);
    }
  };

  return (
    <div className="all-admin-page">
      <div className="add-product-block">
        <form className="input-addproduct-block">
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
              <input
                placeholder="Вводить тут..."
                className="description-addproduct-input"
                type="text"
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
          <button onClick={handleSubmit} className="add-product-button">
            Добавить продукт
          </button>
        </form>
      </div>
      <div className="all-product-list">
        <p className="title-list">Список продуктов</p>
        <div className="all-el-list">
          {products.map((product) => (
            <div className="all-el" key={product.id}>
              <div className="information-block">
                <img
                  src={product.photo || "/placeholder.svg"}
                  alt={product.name}
                  className="admin-product-img"
                />
                <div className="text-block">
                  <p className="product-list-title">{product.name}</p>
                  <p className="product-list-description">
                    {product.description}
                  </p>
                  <p className="product-list-price">$ {product.price}</p>
                </div>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDeleteProduct(product.id)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
