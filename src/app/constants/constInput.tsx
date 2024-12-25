
interface IConstModalInput {
    id: number,
    title: string,
    textClassName: string,
    inputClassName: string,
    type: string;
    inputName: string;
}

interface IAdminAccData {
    adminAccEmail: string;
    adminAccPassword:string;
}

export const constLoginInput:IConstModalInput[] = [
{
    id: 1,
    title: "Почта",
    textClassName: "login-input-title",
    inputClassName: "login-input",
    type: "text",
    inputName: "EmailLogin"

},
{
    id: 2,
    title: "Пароль",
    textClassName: "login-input-title",
    inputClassName: "login-input",
    type: "password",
    inputName: "PasswordLogin",
},
]

export const constRegistrationEmailInput:IConstModalInput[] = [
  
    {
        id: 1,
        title: "Введите почту",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
         type: "text",
        inputName: "EmailRegist"
    },
    {
        id: 2,
        title: "Напишите код с почты",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
        type: "text",
        inputName: "CodAcces"
    },
    ]

    
export const constRegistrationPasswordInput:IConstModalInput[] = [
    {
        id: 1,
        title: "Введите пароль",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
         type: "password",
        inputName: "PasswordReg"
    },
    {
        id: 2,
        title: "Подтвердите пароль",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
        type: "password",
        inputName: "Email"
    },
    ]

 export const adminAccData:IAdminAccData = {
    adminAccEmail: "tnechayev@internet.ru",
     adminAccPassword: "qwert123",
}