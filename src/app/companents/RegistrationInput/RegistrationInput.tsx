"use client";

import { constRegistrationPasswordInput } from "@/app/constants/constInput";
import type React from "react";
import { useState } from "react";
import "./RegistrationInput.css";
import Link from "next/link";

interface IRegistrationInput {
  newUser: Record<string, string>;
  handleChangeInput: (value: string, name: string) => void;
  errors: Record<string, string>;
}

const RegistrationInput: React.FC<IRegistrationInput> = ({
  newUser,
  handleChangeInput,
  errors,
}) => {
  const [isActive, setIsActive] = useState(0);

  const handleActiveInput = (id: number) => {
    setIsActive(id);
  };

  return (
    <>
      <div>
        <p className="registration-title">Зарегистрироваться</p>
        <p className="registration-description">
          Если у тебя есть аккаунт ты можешь
        </p>
        <Link className="link-title" href={"/"}>
          Войти
        </Link>
      </div>

      {constRegistrationPasswordInput.map((el) => {
        const errorMessage = errors[el.inputName];
        const inputValue = newUser[el.inputName];
        const isInputActive = isActive === el.id;
        const hasValue = !!inputValue;

        return (
          <div className="all-block-content" key={el.id}>
            <p className={el.textClassName}>{el.title}</p>
            <div className="input-content">
              <input
                onClick={() => handleActiveInput(el.id)}
                value={inputValue}
                onChange={(e) =>
                  handleChangeInput(e.target.value, el.inputName)
                }
                onBlur={() => setIsActive(0)}
                className={`
                  ${el.inputClassName} 
                  ${isInputActive ? "active" : ""} 
                  ${hasValue ? "has-value" : ""}
                `}
                type={el.type}
                placeholder={el.placeholder}
              />
              <div
                className={`placeholder-SVG ${
                  isInputActive || hasValue ? "hidden" : ""
                }`}
              >
                {el.placeholderSVG}
              </div>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        );
      })}
    </>
  );
};

export default RegistrationInput;
