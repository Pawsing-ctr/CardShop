import React, { useState } from "react";

const QuantityElement = () => {
  const [quantityProduct, setQuantityProduct] = useState(0);

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
  );
};

export default QuantityElement;
