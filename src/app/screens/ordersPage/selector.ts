import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";


export const retrievePausedOrders = createSelector((state: AppRootState) => state.ordersPage,
(OrdersPage) => OrdersPage.pausedOrders)

export const retrieveProcessOrders= createSelector((state: AppRootState)=> state.ordersPage,
(OrdersPage)=> OrdersPage.processOrders
)

export const retrieveFinishedOrders = createSelector((state: AppRootState)=> state.ordersPage,
(OrdersPage)=> OrdersPage.finishedOrders
)