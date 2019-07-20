import React from "react";
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'; 
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import theme from '../theme/theme';

function Header() {
    return (
        <MuiThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <Button component={Link} to="/">
                        Home
                    </Button>
                    <Button component={Link} to="/about">
                        About
                    </Button>
                    <Button componennt={Link} to="/portfolio">
                        Portfolio
                    </Button>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
  }

  export default Header