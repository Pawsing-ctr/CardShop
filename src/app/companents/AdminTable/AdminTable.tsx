"use client";
import React, { useState } from "react";
import "../AdminTable/AdminTable.css";
import IProduct from "@/app/types/product";
import { z } from "zod";
import { createProduct } from "@/app/api/apiProducts";

const productScheme = z.object({
  id: z
    .string()
    .min(1, "Id продукта обязательно")
    .refine((val) => val === val, {
      message:
        "Id нового продукта не должен совпадать с id уже существующего продукта",
    }),
  photo: z.string(),
  name: z.string().min(1, "Название продукта обязательно"),
  description: z.string().min(1, "Описание продукта обязательно"),
  price: z.string().min(1, "Цена на продукт обязательна"),
});

const initialProduct = {
  id: "",
  photo: "",
  name: "",
  description: "",
  price: "",
};

const ProductTable = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  console.log(products);

  const [newProduct, setNewProduct] = useState<IProduct>(initialProduct);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSchemeCheckError = () => {
    const result = productScheme.safeParse(newProduct);

    if (!result.success) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fieldErrors: any = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const resultCheckError = handleSchemeCheckError();
    if (resultCheckError === false) {
      return console.log("Ошибка при отправке данных");
    }
    const productResponse = await createProduct(newProduct);

    setProducts([productResponse]);
    setNewProduct(initialProduct);
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
                type="file"
                value={newProduct.photo}
                onChange={handleInputChange}
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
        </tbody>
        {products.map((product, id) => (
          <tr key={id}>
            <td>{product.id}</td>
            <td></td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProductTable;
