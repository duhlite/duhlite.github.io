import React from "react";
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography' 
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import theme from '../../theme/theme';

var brandStyle = {
    flex: '1'
}

class Header extends React.Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static" id="nav">
                    <Toolbar>
                        <Typography variant="h6" style={brandStyle} >
                            Travis Mingalone
                        </Typography>
                        <Button component={Link} to="/about">
                            About
                        </Button>
                        <Button component={Link} to="/portfolio">
                            Portfolio
                        </Button>
                        <Button component={Link} to="/contact">
                            Contact
                        </Button>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        );
    }
  }

  export default Header