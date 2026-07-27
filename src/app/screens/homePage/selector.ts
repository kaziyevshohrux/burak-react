import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";


export const retrievePopularDishes = createSelector(
  (state: AppRootState) => state.homePage,
  (homePage) => homePage.popularDishes
);

export const retrieveNewDishes = createSelector(
  (state: AppRootState) => state.homePage,
  (homePage) => homePage.newDishes
);

export const retrieveTopUsers = createSelector(
  (state: AppRootState) => state.homePage,
  (homePage) => homePage.topUsers
);
