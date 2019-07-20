import React from "react";
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'; 

function Header() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                </Toolbar>
            </AppBar>
        </div>
    );
  }

  export default Header