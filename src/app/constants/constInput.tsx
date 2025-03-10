import LetterSVG from "../assets/registrationInputAssets/LetterSVG";
import LockSVG from "../assets/registrationInputAssets/LockSVG";
import UserSVG from "../assets/registrationInputAssets/UserSVG";

interface IConstModalInput {
  id: number;
  title: string;
  textClassName: string;
  inputClassName: string;
  type: string;
  inputName: string;
  placeholderSVG: JSX.Element;
  placeholder: string;
}

interface IAdminAccData {
  adminAccEmail: string;
  adminAccPassword: string;
}

export const constRegistrationPasswordInput: IConstModalInput[] = [
  {
    id: 1,
    title: "Username",
    textClassName: "registration-input-title",
    inputClassName: "registration-input",
    type: "text",
    inputName: "userName",
    placeholder: "Введите свое имя",
    placeholderSVG: <UserSVG />,
  },
  {
    id: 2,
    title: "Email",
    textClassName: "registration-input-title",
    inputClassName: "registration-input",
    type: "text",
    inputName: "newUserEmail",
    placeholder: "Введите свою эллектроную почту",
    placeholderSVG: <LetterSVG />,
  },
  {
    id: 3,
    title: "Password",
    textClassName: "registration-input-title",
    inputClassName: "registration-input",
    type: "password",
    inputName: "newUserPassword",
    placeholder: "Введите пароль",
    placeholderSVG: <LockSVG />,
  },
  {
    id: 4,
    title: "Confirm Password",
    textClassName: "registration-input-title",
    inputClassName: "registration-input",
    type: "password",
    inputName: "newUserConfirmPass",
    placeholder: "Подтвердите пароль",
    placeholderSVG: <LockSVG />,
  },
];

export const adminAccData: IAdminAccData = {
  adminAccEmail: "tnechayev@internet.ru",
  adminAccPassword: "qwert123",
};
