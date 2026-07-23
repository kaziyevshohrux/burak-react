import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state :AppRootState) => state.homePage

export const selectPopularDishes = createSelector(
  selectHomePage,
  (homePage) => homePage.popularDishes
);

export const selectNewDishes = createSelector(
  selectHomePage,
  (homePage) => homePage.newDishes
);

export const selectTopUsers = createSelector(
  selectHomePage,
  (homePage) => homePage.topUsers
);
