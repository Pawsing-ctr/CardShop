import React from "react";
import "./FooterHomePage.css";

const FooterHomePage = () => {
  return (
    <div className="all-home-footer">
      <p className="footer-title">ZooShop</p>
      <div className="all-footer-text">
        <div className="footer-text-block">
          <p className="footer-text soc-title">Социальные Сети</p>
          <p className="footer-text">Твиттер</p>
          <p className="footer-text">Пинтерест</p>
          <p className="footer-text">Ютуб</p>
        </div>
        <div className="footer-text-block">
          <p className="footer-text">Получить помощь</p>
          <p className="footer-text">Продавайте с нами</p>
          <p className="footer-text">Добавьте свой зоомагазин</p>
          <p className="footer-text">Подпишитесь на доставку</p>
        </div>
        <div className="footer-text-block">
          <p className="footer-text">Читайте наши статьи</p>
          <p className="footer-text">Приобрести подарочный сертификат</p>
          <p className="footer-text">Зоомагазин рядом</p>
          <p className="footer-text">Сэкономьте на первой покупке</p>
        </div>
      </div>
    </div>
  );
};

export default FooterHomePage;
