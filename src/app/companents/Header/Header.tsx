"use client";
import React, { useState } from "react";
import "../Header/Header.css";
import LoginModal from "../Modal/LoginModal/LoginModal";
// import LoginInput from "../LoginInput/LoginInput";
// import { adminAccData } from "@/app/constants/constInput";
// import { useRouter } from "next/navigation";
import PageBlockWrapper from "../PageBlockWrapper/PageBlockWrapper";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [loginDataUser, setLoginDataUser] = useState<Record<string, string>>(
  //   {}
  // );
  // const router = useRouter();

  // const handleChangeInput = (value: string, name: string) => {
  //
  //   // setLoginDataUser((prev) => ({
  //   //   ...prev,
  //   //   [name]: value,
  //   // }));
  // };

  const openRegistrationModal = () => {
    setIsModalOpen(false);
  };

  // const handleLoginAcc = () => {
  //   if (newUser.newUserEmail === adminAccData.adminAccEmail) {
  //     if (newUser.newUserPassword === adminAccData.adminAccPassword) {
  //       router.push("/admin");
  //       setIsModalOpen(false);
  //     }
  //   } else {
  //     return;
  //   }
  // };

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
            {/* <LoginInput
              loginDataUser={loginDataUser}
              handleChangeInput={handleChangeInput}
            /> */}
            <div className="login-active-block">
              <div className="login-save-account">
                <p className="login-title-account">Забыли пароль?</p>
                <p
                  onClick={openRegistrationModal}
                  className="login-title-account"
                >
                  Зарегистрироваться
                </p>
              </div>
              <div className="sign-in-block">
                <button className="sign-in-button">Войти</button>
              </div>
            </div>
          </div>
        </LoginModal>
      </div>
    </PageBlockWrapper>
  );
};

export default Header;
