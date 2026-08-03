import React, { useState } from 'react';

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
import  Footer  from './components/footer';
import "../css/app.css"
import "../css/navbar.css"
import { CartItem } from '../lib/types/search';
import useBasket from './hooks/useBasket';

function App() {

const location = useLocation();
const {cartItems, onAdd , onRemove, onDelete, onDeleteAll} = useBasket()



  return (
        <>
        {location.pathname==="/" ? <HomeNavbar
         cartItems={cartItems}
         onAdd={onAdd}
         onRemove={onRemove}
          onDelete={onDelete}
           onDeleteAll={onDeleteAll}
        /> : <OtherNavbar cartItems={cartItems}
          onAdd={onAdd}
        onRemove={onRemove}
         onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />}
        <Switch>
           <Route path="/help">
            <HelpPage />
          </Route>
          <Route path="/products">
            <ProductsPage onAdd={onAdd} />
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
