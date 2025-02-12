"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./page.css";
import IProduct from "@/app/types/product";
import { getProducts } from "@/app/api/apiProducts";
import Link from "next/link";
import FooterHomePage from "@/app/companents/FooterHomePage/FooterHomePage";

const ClientComponent = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [quantityProduct, setQuantityProduct] = useState(0);
  console.log(products);

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

  const handleAddQuantityProduct = () => {
    setQuantityProduct(quantityProduct + 1);
  };

  const handleSetQuantityProduct = () => {
    if (quantityProduct <= 0) {
      return;
    } else {
      setQuantityProduct(quantityProduct - 1);
    }
  };

  const handleDeleteQuantityProduct = () => {
    setQuantityProduct(0);
  };

  return (
    <div className="all-card">
      <div className="all-card-content">
        <div className="card-element">
          <div>
            <Link href={"/"}>
              <p>Вернуться</p>
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
        <div className="quantity-block">
          <div className="top-content">
            <p className="quantity">{`Покупаемое количество продукта: ${quantityProduct}`}</p>
            <div>
              <button
                className="quantity-button"
                onClick={handleSetQuantityProduct}
              >
                -
              </button>
              <button
                className="quantity-button"
                onClick={handleAddQuantityProduct}
              >
                +
              </button>
            </div>
          </div>
          <div className="bot-content">
            <p
              onClick={handleDeleteQuantityProduct}
              className="delete-all-quantity"
            >
              Удалить все
            </p>
          </div>
        </div>
      </div>
      <div className="checkbox-content">
        <div className="checkbox-block">
          <input className="checkbox-input" type="checkbox" />
          <span className="checkbox-text">
            Я прочитал и согласен с условиями лицензионного соглашения
          </span>
        </div>
        <div className="checkbox-block">
          <input className="checkbox-input" type="checkbox" />
          <span className="checkbox-text">Отправка чека на вашу почту</span>
        </div>
      </div>
      <div className="card-button-content">
        <button className="card-button">Добавить в корзину</button>
        <button className="card-button">
          <Link className="back-to-home" href={"/"}>
            <p>Вернуться обратно</p>
          </Link>
        </button>
      </div>
      <FooterHomePage />
    </div>
  );
};
export default ClientComponent;
