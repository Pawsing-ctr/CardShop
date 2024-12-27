"use client";
import React, { useState } from "react";
import Container from "../Container/Container";
import "../Header/Header.css";
import SearchSvg from "@/app/assets/headerAssets/SearchSvg";
import BasketSvg from "@/app/assets/headerAssets/BasketSvg";
import LoginModal from "../Modal/LoginModal/LoginModal";
import RegistrationModal from "../Modal/RegistrationModal/RegistrationModal";
import {
  constRegistrationEmailInput,
  constRegistrationPasswordInput,
} from "@/app/constants/constInput";
import LoginInput from "../LoginInput/LoginInput";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();
  const correctAdminDataEmail = "tnechayev@internet.ru";
  const correctAdminDataPassword = "qwerty";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenRegistration, setIsModalOpenRegistration] = useState(false);
  const [inputData, setInputData] = useState<Record<string, string>>({});
  const handleChangeInput = (value: string, name: string) => {
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openRegistrationModal = () => {
    setIsModalOpen(false);
    setIsModalOpenRegistration(true);
  };

  const handleLoginAcc = () => {
    if (inputData.EmailLogin === correctAdminDataEmail) {
      if (inputData.PasswordLogin === correctAdminDataPassword) {
        router.push("/admin");
        setIsModalOpen(false);
      }
    } else {
      return;
    }
  };

  return (
    <div>
      <div className="background-color" />
      <Container>
        <div className="all-header">
          <p className="header-title">New Spring offer</p>
          <div className="header-search-block">
            <input
              placeholder="Search anything..."
              className="search-input"
              type="text"
            />
            <button className="search-button">
              <SearchSvg />
            </button>
          </div>
          <div className="basket-svg-block">
            <BasketSvg />
            <button onClick={() => setIsModalOpen(true)}>
              Войти в аккаунт
            </button>

            <LoginModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              <div className="all-login-modal">
                <LoginInput
                  inputData={inputData}
                  handleChangeInput={handleChangeInput}
                />
                <div className="login-active-block">
                  <div className="login-save-account">
                    <p className="login-title-account">Забыли пароль?</p>
                    <p
                      onClick={openRegistrationModal}
                      className="login-title-account"
                    >
                      Зарегестрироваться
                    </p>
                  </div>
                  <div className="sign-in-block">
                    <button onClick={handleLoginAcc} className="sign-in-button">
                      Войти
                    </button>
                  </div>
                </div>
              </div>
            </LoginModal>
            <RegistrationModal
              isOpen={isModalOpenRegistration}
              onClose={() => setIsModalOpenRegistration(false)}
            >
              <div className="all-registration-modal">
                <div>
                  {constRegistrationEmailInput.map((el) => {
                    return (
                      <div className="qwerqwe" key={el.id}>
                        <p className={el.textClassName}>{el.title}</p>
                        <input className={el.inputClassName} type="text" />
                      </div>
                    );
                  })}
                  <div className="email-button-block">
                    <button className="email-button">
                      Отправить код повторно
                    </button>
                  </div>
                </div>
                <div className="registration-input-block">
                  {constRegistrationPasswordInput.map((el) => {
                    return (
                      <div key={el.id}>
                        <p className={el.textClassName}>{el.title}</p>
                        <input className={el.inputClassName} type="text" />
                      </div>
                    );
                  })}
                </div>
                <div className="registration-button-block">
                  <button className="">Зарегестрироваться</button>
                </div>
              </div>
            </RegistrationModal>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
