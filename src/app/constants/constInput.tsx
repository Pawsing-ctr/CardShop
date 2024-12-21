
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

export const constRegistrationInput:IConstModalInput[] = [
    {
        id: 1,
        title: "Введите имя",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
        placeholder: "Введите почту",
    },
    {
        id: 2,
        title: "Введите фамилию",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
        placeholder: "Введите пароль",
    },
    {
        id: 3,
        title: "Введите почту",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
        placeholder: "Введите пароль",
    },
    {
        id: 4,
        title: "Введите номер",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
        placeholder: "Введите пароль",
    },
    {
        id: 5,
        title: "Введите пароль",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
        placeholder: "Введите пароль",
    },
    {
        id: 6,
        title: "Подтвердите пароль",
        textClassName: "registration-input-title",
        inputClassName: "registration-input",
        placeholder: "Введите пароль",
    },
    ]