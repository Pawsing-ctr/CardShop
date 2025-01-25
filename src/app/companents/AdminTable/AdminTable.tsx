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
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Фото</th>
            <th>Название</th>
            <th>Описание</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="add-product-title" colSpan={5}>
              Добавить товар
            </td>
          </tr>

          <tr className="input-make-new-product">
            <td>
              <p className="error-text">{errors.id}</p>
              <input
                className="add-product-input"
                type="number"
                name="id"
                value={newProduct.id}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="add-product-input-photo"
                name="image"
                type="file"
                onChange={handleFileChange}
              />
            </td>
            <td>
              <p className="error-text">{errors.name}</p>
              <input
                className="add-product-input"
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <p className="error-text">{errors.description}</p>
              <input
                className="add-product-input"
                type="text"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <p className="error-text">{errors.price}</p>
              <input
                className="add-product-input"
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td className="add-product-title" colSpan={5}>
              <button onClick={handleSubmit}>Добавить товар</button>
            </td>
          </tr>
          <tr>
            <td className="add-product-title" colSpan={5}>
              Новые товары
            </td>
          </tr>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img
                  src={product.photo || "/placeholder.svg"}
                  alt={product.name}
                  className="adminProductImg"
                />
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <button onClick={() => handleDeleteProduct(product.id)}>
                Удалить продукт
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
