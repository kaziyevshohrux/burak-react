import { Member } from "./member";
import { Product } from "./products";

/***   REact app state*/
export interface AppRootState {
    homePage: HomePageState
}


/*HomePage */
export interface HomePageState{
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}


/*Products*/


/*Orders */