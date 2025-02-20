"use client";
import { createUser, ICreateUserData } from "@/app/api/apiUsers";
import { INewUser } from "@/app/api/apiUsers/types";
import PageBlockWrapper from "@/app/companents/PageBlockWrapper/PageBlockWrapper";
import RegistrationInput from "@/app/companents/RegistrationInput/RegistrationInput";
import { initialUser } from "@/app/constants/initialConst";
import { handleSchemeCheckError } from "@/app/schemeErrorFunc/schemeErrorFunc";
import React, { useState } from "react";
import { z } from "zod";
import "./page.css";

const ClientComponent = () => {
  const [newUser, setNewUser] = useState(initialUser);
  const [users, setUsers] = useState<INewUser[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const registrationUserScheme = z
    .object({
      userName: z.string().min(3, "В имени должно быть минимум 3 буквы"),
      newUserEmail: z.string().email("Некорректный email"),
      newUserPassword: z
        .string()
        .min(8, "В пароле должно быть минимум 8 символов"),
      newUserConfirmPass: z.string().min(1, "Подтверждение пароля обязательно"),
    })
    .refine((data) => data.newUserPassword === data.newUserConfirmPass, {
      message: "Пароли не совпадают",
    });

  const handleChangeInput = (value: string, name: string) => {
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const resultCheckError = handleSchemeCheckError(
      registrationUserScheme,
      newUser,
      setErrors
    );

    if (!resultCheckError) {
      return console.log("Ошибка при отправке данных");
    }

    try {
      const userData: ICreateUserData = {
        username: newUser.userName,
        email: newUser.newUserEmail,
        password: newUser.newUserPassword,
        confirmPassword: newUser.newUserConfirmPass,
      };

      const userResponse = await createUser(userData);
      console.log(userResponse);
      if (userResponse.data) {
        setUsers([...users, userResponse.data]);
        setNewUser(initialUser);
        console.log("Пользователь успешно зарегистрирован:", userResponse.data);
      }
    } catch (error) {
      console.error("Ошибка при создании пользователя:", error);
    }
  };
  return (
    <PageBlockWrapper>
      <div className="all-registration">
        <div className="left-content">
          <div className="image-text-content">
            <img
              className="registration-background-img"
              src="./registration-background.webp"
              alt=""
            />
          </div>
        </div>
        <div className="right-content">
          <form
            onSubmit={handleRegistSubmit}
            className="all-registration-modal"
          >
            <RegistrationInput
              newUser={newUser}
              handleChangeInput={handleChangeInput}
              errors={errors}
            />
            <div className="registration-button-block">
              <button className="sign-in-button">Зарегистрироваться</button>
            </div>
          </form>
        </div>
      </div>
    </PageBlockWrapper>
  );
};

export default ClientComponent;
