import { Member } from "./member";
import { Product } from "./products";

/***   REact app state*/
export interface AppRootState {
    homePage: HomePageState,
    productsPage: ProductsPageState
}


/*HomePage */
export interface HomePageState{
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}


/*Products*/

export interface ProductsPageState{
    restaurant: Member | null,
    chosenProduct : Product | null,
    products : Product[]

}

/*Orders */