import IProduct from "@/app/types/product";
import $api from "../$api";
import { productsPath } from "./productsPath";

export const getProducts = async () => {
  try {
    const { data } = await $api.get(productsPath.ALL_PRODUCTS);
    return data;
  } catch (error) {
    return error;
  }
};

export const createProduct = async (newProduct: IProduct) => {
  try {
    const { data } = await $api.post(productsPath.ALL_PRODUCTS, newProduct);
    return data;
  } catch (error) {
    return error;
  }
};
