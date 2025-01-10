"use client";
import React, { useState } from "react";
import "../AdminTable/AdminTable.css";

type Product = {
  id: string;
  photo: string;
  name: string;
  description: string;
  price: string;
};

const ProductTable = () => {
  // const [data, setData] = useState<Product[]>([]);

  const [newProduct, setNewProduct] = useState<Product>({
    id: "",
    photo: "",
    name: "",
    description: "",
    price: "",
  });
  console.log(newProduct);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3005/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const result = await response.json();
      console.log(result.message); // Уведомление об успешной записи
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
    // setData((prev) => [...prev, newProduct]);
    // setNewProduct({ id: "", photo: "", name: "", description: "", price: "" });
  };

  return (
    <div>
      <table onSubmit={handleSubmit}>
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
            <td colSpan={5} style={{ textAlign: "center", fontWeight: "bold" }}>
              Добавить продукт
            </td>
          </tr>

          <tr className="input-make-new-product">
            <td>
              <input
                className="addProducInput"
                type="number"
                name="id"
                placeholder="id"
                value={newProduct.id}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="addProducInput"
                type="text"
                name="photo"
                placeholder="Фото продукта"
                value={newProduct.photo}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="addProducInput"
                type="text"
                name="name"
                placeholder="Название"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="addProducInput"
                type="text"
                name="description"
                placeholder="Описание"
                value={newProduct.description}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="addProducInput"
                type="number"
                name="price"
                placeholder="Цена"
                value={newProduct.price}
                onChange={handleInputChange}
              />
              <button onClick={handleSubmit}>Добавить продукт</button>
            </td>
            {/* {data.map((product, id) => (
              <tr key={id}>
                <td>{product.id}</td>
                <td></td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
              </tr>
            ))} */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
