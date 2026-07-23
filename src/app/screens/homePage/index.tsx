import React, { useEffect } from "react";
import Statistics from "./Statistics";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUser";
import Events from "./Events";
import PopularDishes from "./PopularDishes";
import "../../../css/home.css"






export default function HomePage() {

 
  useEffect(() => {
  // Selector Store => DAta

    //Backend server data request => Data DidMount
    

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