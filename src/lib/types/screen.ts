import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./products";

/***   REact app state*/
export interface AppRootState {
    homePage: HomePageState,
    productsPage: ProductsPageState
    ordersPage: OrdersPageState
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
export interface OrdersPageState{
    pausedOrders: Order[]
    processOrders: Order[]
    finishedOrders: Order[]
}