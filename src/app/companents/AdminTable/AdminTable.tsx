"use client";
import type React from "react";
import { useState, useEffect } from "react";
import "./AdminTable.css";
import { z } from "zod";
import { createProduct, getProducts } from "@/app/api/apiProducts";
import type IProduct from "@/app/types/product";
import $api from "@/app/api/$api";
import { productsPath } from "@/app/api/apiProducts/productsPath";
import PageBlockWrapper from "../PageBlockWrapper/PageBlockWrapper";
import AdminCardBlock from "../AdminCardBlock/AdminCardBlock";
import { motion } from "framer-motion";
import AdminFormCompanent from "../AdminFormCompanent/AdminFormCompanent";
import { initialProduct } from "@/app/constants/initialConst";
import { handleSchemeCheckError } from "@/app/schemeErrorFunc/schemeErrorFunc";

const AdminTable = () => {
  // все мои данные в products
  const [products, setProducts] = useState<IProduct[]>([]);
  const [newProduct, setNewProduct] = useState(initialProduct);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [file, setFile] = useState<File | null>(null);

  const productScheme = z.object({
    id: z
      .string()
      .min(1, "Id продукта обязательно")
      .refine((val) => !products.some((product) => product.id === val), {
        message:
          "Id нового продукта не должен совпадать с id уже существующего продукта",
      }),

    name: z.string().min(1, "Название продукта обязательно"),
    description: z.string().min(1, "Описание продукта обязательно"),
    price: z.string().min(1, "Цена на продукт обязательна"),
  });

  useEffect(() => {
    adminGetProductsList();
  }, []);

  const adminGetProductsList = async () => {
    const getServerProducts = await getProducts();
    setProducts(getServerProducts);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

    const resultCheckError = handleSchemeCheckError(
      productScheme,
      newProduct,
      setErrors
    );
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
    <PageBlockWrapper style={{ flex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
      >
        <div className="all-admin-page">
          <AdminCardBlock>
            <AdminFormCompanent
              handleSubmit={handleSubmit}
              handleFileChange={handleFileChange}
              handleInputChange={handleInputChange}
              newProduct={newProduct}
              errors={errors}
            />
          </AdminCardBlock>
          <AdminCardBlock>
            <p className="title-list">Список продуктов</p>
            <div className="all-el-list">
              {products.map((product) => (
                <div className="all-el" key={product.id}>
                  <div className="information-block">
                    <img
                      src={`http://localhost:3005/api/products/${product.id}/image`}
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
          </AdminCardBlock>
        </div>
      </motion.div>
    </PageBlockWrapper>
  );
};

export default AdminTable;
