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
  const [data, setData] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Product>({
    id: "",
    photo: "",
    name: "",
    description: "",
    price: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    setData((prev) => [...prev, newProduct]);
    setNewProduct({ id: "", photo: "", name: "", description: "", price: "" });
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
            <td colSpan={5} style={{ textAlign: "center", fontWeight: "bold" }}>
              Добавить продукт
            </td>
          </tr>
          <tr className="input-make-new-product">
            <td>
              <input
                className="addProducInput"
                type="text"
                name="id"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="addProducInput"
                type="text"
                name="photo"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="addProducInput"
                type="text"
                name="name"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="addProducInput"
                type="text"
                name="description"
                onChange={handleInputChange}
              />
            </td>

            <td>
              <input
                className="addProducInput"
                type="text"
                name="price"
                onChange={handleInputChange}
              />
              <button onClick={handleAddProduct}>Добавить продукт</button>
            </td>
          </tr>
          {data.map((product, id) => (
            <tr key={id}>
              <td>{product.id}</td>
              <td>
                {/* <img
                  src={product.photo}
                  alt="product"
                  style={{ width: "50px" }}
                /> */}
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
