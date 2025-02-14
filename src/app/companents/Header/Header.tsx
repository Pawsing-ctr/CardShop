"use client";
import React, { useState } from "react";
import "../Header/Header.css";
import LoginModal from "../Modal/LoginModal/LoginModal";
import LoginInput from "../LoginInput/LoginInput";
import RegistrationModal from "../Modal/RegistrationModal/RegistrationModal";
import {
  constRegistrationEmailInput,
  constRegistrationPasswordInput,
} from "@/app/constants/constInput";
import { useRouter } from "next/navigation";
import PageBlockWrapper from "../PageBlockWrapper/PageBlockWrapper";

const Header = () => {
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
    <PageBlockWrapper>
      <div className="all-header-active">
        <p className="text-title-header">Zooshop</p>
        <div className="button-block">
          <button
            onClick={openRegistrationModal}
            className="registration-button"
          >
            Зарегистрироваться
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="header-button"
          >
            Войти
          </button>
        </div>
        <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
                <button className="email-button">Отправить код повторно</button>
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
    </PageBlockWrapper>
  );
};

export default Header;
