import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography' 

import theme from '../theme/theme';
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const Back = {
    height: '100vh'
}

const Text = {
    color: 'white'
}

var brandStyle = {
    flex: '1'
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.domElem = React.createRef();
    }

    handleClick = (event) => {
        if(this.domElem.current) {
            setTimeout(() => {
                this.domElem.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
               });
            }, 100);
        }
    }
    
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div style={Back}>
                        <h1 style={Text}>Hello, I'm Travis Mingalone</h1>
                        <p style={Text}>A full stack developer</p>
                        <p style={Text}>View my <Link to="/about" onClick={e => this.handleClick(e)}>work</Link>.</p>
                    </div>
                    <AppBar position="static" id="nav" ref={this.domElem}>
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
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                </MuiThemeProvider>
            </Router> 
        )
    }
}