import React from 'react';

import '../css/app.css';
import {
  
  Route,
  Switch,
  useLocation,
  
} from "react-router-dom";
import  HomePage  from './screens/homePage';
import  ProductsPage  from './screens/productsPage';
import  UsersPage  from './screens/userPage';
import  OrdersPage  from './screens/ordersPage';
import  OtherNavbar  from './components/header/OtherNavbar';
import  HomeNavbar  from './components/header/HomeNavbar';
import HelpPage  from './screens/helpPage';
import Test from "./screens/Test"
import  Footer  from './components/footer';
import "../css/app.css"
import "../css/navbar.css"

function App() {

const location = useLocation()

  return (
        <>
        {location.pathname==="/" ? <HomeNavbar/> : <OtherNavbar/>}
        <Switch>
           <Route path="/help">
            <HelpPage />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/orders">
            <OrdersPage/>
          </Route>
          <Route path="/member-page">
            <UsersPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          </Switch>
          <Footer/>
          
        </>
     )

}
export default App;
