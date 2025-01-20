import { productsPath } from "./productsPath";
import IProduct from "@/app/types/product";
import $api from "../$api";

export const createProduct = async (
  formData: FormData
): Promise<{ data: IProduct }> => {
  try {
    const response = await $api.post<{ data: IProduct }>(
      productsPath.ALL_PRODUCTS,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await $api.get<IProduct[]>(productsPath.ALL_PRODUCTS);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
