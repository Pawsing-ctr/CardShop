import { constLoginInput } from "@/app/constants/constInput";
import React from "react";

interface ILoginInput {
  loginDataUser: Record<string, string>;
  handleChangeInput: (value: string, name: string) => void;
}

const LoginInput: React.FC<ILoginInput> = ({
  loginDataUser,
  handleChangeInput,
}) => {
  return (
    <div className="login-data">
      {constLoginInput.map((el) => {
        return (
          <div key={el.id}>
            <p className={el.textClassName}>{el.title}</p>
            <input
              value={loginDataUser[el.inputName]}
              onChange={(e) => handleChangeInput(e.target.value, el.inputName)}
              className={el.inputClassName}
              type={el.type}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LoginInput;
