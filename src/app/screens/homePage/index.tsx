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
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";


/* Redux slice & Selector */
 const actiondispatch = (dispatch : Dispatch) => ({
    setPopularDishes: (data : Product[]) => dispatch(setPopularDishes(data)),
  });

 

export default function HomePage() {
const { setPopularDishes } = actiondispatch(useDispatch());
  useEffect(() => {
  // Selector Store => DAta

    //Backend server data request => Data DidMount
    const product = new ProductService()

    product.getProducts({
      page:1,
      limit:4,
      order:"ProductViews",
      productCollection: ProductCollection.DISH
    })
    .then((data)=>{
      console.log("data passed here:", data)
      setPopularDishes(data)
    })
    .catch((err) => console.log(err))
    //Slice: Data => Store
  }, [])
 

  return <div className={"homepage"}>
    <Statistics/>
    <PopularDishes/>
    <NewDishes/>
    <Advertisement/>
    <ActiveUsers/>
    <Events/>
  </div>;
}