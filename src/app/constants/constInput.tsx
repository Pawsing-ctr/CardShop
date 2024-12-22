
interface IConstModalInput {
    id: number,
    title: string,
    textClassName: string,
    inputClassName: string,
    placeholder: string,
}


export const constLoginInput:IConstModalInput[] = [
{
    id: 1,
    title: "Почта",
    textClassName: "login-input-title",
    inputClassName: "login-input",
    placeholder: "Введите почту",
},
{
    id: 2,
    title: "Пароль",
    textClassName: "login-input-title",
    inputClassName: "login-input",
    placeholder: "Введите пароль",
},
]

export const constRegistrationEmailInput:IConstModalInput[] = [
  
    {
        id: 1,
        title: "Введите почту",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
        placeholder: "Введите пароль",
    },
    {
        id: 2,
        title: "Напишите код с почты",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
        placeholder: "Введите пароль",
    },
    ]

    
export const constRegistrationPasswordInput:IConstModalInput[] = [
    {
        id: 1,
        title: "Введите пароль",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
        placeholder: "Введите пароль",
    },
    {
        id: 2,
        title: "Подтвердите пароль",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
        placeholder: "Введите пароль",
    },
    ]