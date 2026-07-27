import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";


export const retrieveRestaurant = createSelector((state: AppRootState) => state.productsPage,
(productsPage) => productsPage.restaurant)

export const retrieveChosenProduct = createSelector((state: AppRootState)=> state.productsPage,
(productsPage)=> productsPage.chosenProduct
)

export const retrieveProducts = createSelector((state: AppRootState)=> state.productsPage,
(productsPage)=> productsPage.products
)