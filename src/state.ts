import { createGlobalState } from "react-hooks-global-state";
import { ProductType } from "./interface";

export const { setGlobalState, useGlobalState } = createGlobalState({
  products: [],
  favoriteProducts: [],
});

export const setProductsLike = (product: ProductType) => {
  const { id, like } = product;

  setGlobalState("products", (products: any) => {
    products.forEach((prod: ProductType) => {
      if (prod.id === id) {
        prod.like = !like;
      }
    });
    return products;
  });

  setGlobalState("favoriteProducts", (favoriteProducts: any) => {
    console.log(favoriteProducts, product);
    if (!like) {
      return favoriteProducts.concat(product);
    } else {
      return favoriteProducts.filter((prod: ProductType) => prod.id !== id);
    }
  });
};
