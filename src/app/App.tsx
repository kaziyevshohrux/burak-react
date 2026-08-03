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
import AuthenticationModal from './auth';
import { T } from '../lib/types/common';
import { sweetErrorHandling, sweetTopSuccessAlert } from '../lib/sweetAlert';
import { Message } from '../lib/config';
import MemberService from './services/MemberService';
import { useGlobals } from './hooks/useGlobals';

function App() {
const {setAuthMember} = useGlobals()
const location = useLocation();
const {cartItems, onAdd , onRemove, onDelete, onDeleteAll} = useBasket()

const [signupOpen, setSignupOpen] = useState<boolean>(false)
const [loginOpen, setLoginOpen] = useState<boolean>(false)

const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);


/*hendlers*/

const handleSignupClose = () => setSignupOpen(false)

const handleLoginClose = () => setLoginOpen(false)
const handleLogoutClick = (e: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(e.currentTarget);

} 
const handleCloseLogout = () => setAnchorEl(null) 

const handleLogoutRequest = async () => {
  try{
    const member = new MemberService()
    await member.logout()
    sweetTopSuccessAlert("seccess" , 700)
    setAuthMember(null)
  }
  catch(err) {
    console.log(err)
    sweetErrorHandling(Message.error1)
  }
}
return (
        <>
        {location.pathname==="/" ? <HomeNavbar
         cartItems={cartItems}
         onAdd={onAdd}
         onRemove={onRemove}
          onDelete={onDelete}
           onDeleteAll={onDeleteAll}
           setSignupOpen={setSignupOpen}
           setLoginOpen={setLoginOpen}
           handleLogoutClick={handleLogoutClick}
           anchorEl={anchorEl}
           handleCloseLogout={handleCloseLogout}
           handleLogoutRequest={handleLogoutRequest}
        
        /> : <OtherNavbar cartItems={cartItems}
          onAdd={onAdd}
        onRemove={onRemove}
         onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          setLoginOpen={setLoginOpen}
          setSignupOpen={setSignupOpen}
             handleLogoutClick={handleLogoutClick}
           anchorEl={anchorEl}
           handleCloseLogout={handleCloseLogout}
           handleLogoutRequest={handleLogoutRequest}
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
          
          <AuthenticationModal 
          signupOpen={signupOpen}
          loginOpen={loginOpen}
          handleSignupClose={handleSignupClose}
          handleLoginClose={handleLoginClose}
          />
        </>
     )
    }

export default App
