import React, { useEffect } from "react";
import Statistics from "./Statistics";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUser";
import Events from "./Events";
import PopularDishes from "./PopularDishes";
import "../../../css/home.css"

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/products";


/* Redux slice & Selector */
 const actiondispatch = (dispatch : Dispatch) => ({
    setPopularDishes: (data : Product[]) => dispatch(setPopularDishes(data)),
  });

  const popularDishesRetriever = createSelector( retrievePopularDishes, (popularDishes) => ({popularDishes}) )

export default function HomePage() {
const { setPopularDishes } = actiondispatch(useDispatch());
const {popularDishes} = useSelector(popularDishesRetriever)
  useEffect(() => {
  // Selector Store => DAta

    //Backend server data request => Data DidMount

   
     
    //Slice: Data => Store
  }, [])
 
  console.log("popularDishes", popularDishes)

  return <div className={"homepage"}>
    <Statistics/>
    <PopularDishes/>
    <NewDishes/>
    <Advertisement/>
    <ActiveUsers/>
    <Events/>
  </div>;
}