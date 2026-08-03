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

function App() {

const location = useLocation()
const cartJSON: string | null = localStorage.getItem("cartData")
const currentCart = cartJSON ? JSON.parse(cartJSON): []
const [cartItems, setCartItems] = useState<CartItem[]>(currentCart)

/** handlers*/

const onAdd = (input: CartItem) => {
  const exist: any = cartItems.find((item: CartItem) => item._id === input._id)

  if(exist){
    const cartUpdate = cartItems.map((item: CartItem)=>
    item._id === input._id 
  ? {...exist, quantity: exist.quantity+1}
: item)
setCartItems(cartUpdate)
    localStorage.setItem("cartData", JSON.stringify(cartUpdate))
  } else {
    const cartUpdate = [...cartItems, {...input}]
    setCartItems(cartUpdate)
    localStorage.setItem("cartData", JSON.stringify(cartUpdate))
  }
}

  return (
        <>
        {location.pathname==="/" ? <HomeNavbar cartItems={cartItems}/> : <OtherNavbar cartItems={cartItems}/>}
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
