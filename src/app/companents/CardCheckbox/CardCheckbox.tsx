import React from "react";
import "./CardCheckbox.css";

const CardCheckbox = () => {
  return (
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
  );
};

export default CardCheckbox;
