import React from 'react';
import {AppBar, Toolbar, styled} from "@mui/material";
import myLogo from "./images/logo.png";

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
`

const Header = () => {

  return (
    <Container position='static'>
      <Toolbar>
        <img src={myLogo} alt="logo" style={{height: '9vh', position: 'relative', right: '3vh'}}/>
      </Toolbar>
    </Container>
  );
}

export default Header;