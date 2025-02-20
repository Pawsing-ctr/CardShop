import { getProducts } from "@/app/api/apiProducts";
import IProduct from "@/app/types/product";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./CardElement.css";

const CardElement = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const params = useParams();
  const { id } = params;

  const correctProduct = products.find((el) => el.id === id);

  useEffect(() => {
    productDesignation();
  }, []);

  const productDesignation = async () => {
    const getServerProducts = await getProducts();
    setProducts(getServerProducts);
  };
  return (
    <div className="card-element">
      <div className="img-block">
        <Link className="back-to-home" href={"/"}>
          <p className="back-to-home">Вернуться назад</p>
        </Link>
        <img
          className="card-img"
          src={`http://localhost:3005/api/products/${correctProduct?.id}/image`}
          alt=""
        />
      </div>
      <div className="card-text-block">
        <p className="card-title">{correctProduct?.name}</p>
        <p className="card-description">{correctProduct?.description}</p>
        <p className="card-price">{correctProduct?.price}₽</p>
      </div>
    </div>
  );
};

export default CardElement;
