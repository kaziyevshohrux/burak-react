import { Box, Button, Container,  } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";

export function HomeNavbar() {
  const authMember = null;

  return (
    <div className="home-navbar">
      <Container>
        <Stack 
        sx={{
            mt: "55px",
            height: "50px",
            flexDirection: "row",
            justifyContent: "space-between",
          alignItems: "center",
        }}
         
        >
          <Box>
            <NavLink to="/">
              <img
                style={{ width: "125px", height: "30px" }}
                src="/icons/burak.svg"
                alt="logo"
              />
            </NavLink>
          </Box>

          <Stack 
            sx={{flexDirection:"row",
                 justifyContent:"space-between",
                 minWidth:"700px",
                 alignItems:"center"}}
          >
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName="underline">Home</NavLink>
            </Box>

            <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName="underline">Products</NavLink>
            </Box>

            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName="underline">Orders</NavLink>
              </Box>
            ) : null}

            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName="underline">My Page</NavLink>
              </Box>
            ) : null}

            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName="underline">Help</NavLink>
            </Box>

            {!authMember ? (
              <Box>
                <Button variant="contained" style={{ background: "#3776CC", color:"f8f8ff"}}>Login</Button>
              </Box>
            ) : (
              <img src="/icons/user.svg" alt="user" />
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}