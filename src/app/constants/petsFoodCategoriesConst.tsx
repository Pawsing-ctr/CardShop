// import CatSVG from "@/app/assets/petsFoodCategoriesAssets/CatSVG";
// import DogSVG from "../assets/petsFoodCategoriesAssets/DogSVG";
// import ParrotSVG from "../assets/petsFoodCategoriesAssets/ParrotSVG";
// import FishSVG from "../assets/petsFoodCategoriesAssets/FishSVG";
// import HorseSVG from "../assets/petsFoodCategoriesAssets/HorseSVG";
// import RabbitSVG from "../assets/petsFoodCategoriesAssets/RabbitSVG";
// import HenSVG from "../assets/petsFoodCategoriesAssets/HenSVG";
// import TortoiseSVG from "../assets/petsFoodCategoriesAssets/TortoiseSVG";

interface IPetsFoodCategories {
  id: number;
  imgBackground: string;
  title: string;
}

export const petsFoodCategoriesConst: IPetsFoodCategories[] = [
  //     {
  //     id: 1,
  //     imgComponent: <CatSVG />,
  //     title: "Cat",
  // },
  // {
  //     id: 2,
  //     imgComponent: <DogSVG />,
  //     title: "Dog",
  // },
  // {
  //     id: 3,
  //     imgComponent: <ParrotSVG />,
  //     title: "parrot",
  // },
  // {
  //     id: 4,
  //     imgComponent: <FishSVG />,
  //     title: "Fish",
  // },
  // {
  //     id: 5,
  //     imgComponent: <HorseSVG />,
  //     title: "horse",
  // },
  // {
  //     id: 6,
  //     imgComponent: <RabbitSVG />,
  //     title: "rabbit",
  // },
  // {
  //     id: 7,
  //     imgComponent: <HenSVG />,
  //     title: "hen",
  // },
  // {
  //     id: 8,
  //     imgComponent: <TortoiseSVG />,
  //     title: "tortoise",
  // },
  {
    id: 1,
    imgBackground: "TerriDog.jpg",
    title: "Собаки",
  },
  {
    id: 2,
    imgBackground: "kitty.jpg",
    title: "Коты",
  },
  {
    id: 3,
    imgBackground: "hamster.jpg",
    title: "Хомяки",
  },
  {
    id: 4,
    imgBackground: "rabbit.jpg",
    title: "Кролики",
  },
  {
    id: 5,
    imgBackground: "parrot.jpg",
    title: "Попугаи",
  },
  {
    id: 6,
    imgBackground: "fish.jpg",
    title: "Рыбы",
  },
];
