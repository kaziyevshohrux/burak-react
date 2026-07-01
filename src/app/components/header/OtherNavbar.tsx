import { Box, Button, Container,  } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";

export function OtherNavbar() {
  const authMember = null;

  return (
    <div className="other-navbar">
      <Container className="navbar-container">
        <Stack className="menu" >
         
        
          <Box>
            <NavLink to="/">
              <img
                className="brand-logo"
                src="/icons/burak.svg"
                alt="logo"
              />
            </NavLink>
          </Box>

          <Stack className="links"
          >
            <Box className={"hover-line"}>
              <NavLink to="/" >
              Home</NavLink>
            </Box>

            <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName="underline">
              Products</NavLink>
            </Box>

            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName="underline">
                Orders</NavLink>
              </Box>
            ) : null}

            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName="underline">
                My Page</NavLink>
              </Box>
            ) : null}

            <Box className={"hover-line"}>
              <NavLink to="/help"
               activeClassName="underline">
                Help</NavLink>
            </Box>
             {/*Basket*/}
            {!authMember ? (
              <Box>
                <Button variant="contained" 
                className="login-button">
                  Login</Button>
              </Box>
            ) : (
              <img 
              src={"/icons/default-user.svg"} alt="user-avatar" 
              className="user-avatar"
              aria-haspopup={"true"} />
            )}
          </Stack>
         
        </Stack>
       
      </Container>
    </div>
  );
}