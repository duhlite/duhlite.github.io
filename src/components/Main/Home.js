import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography' 

import theme from '../../theme/theme';
import './Home.css';
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: 'hidden'
        }
        this.domElem = React.createRef();
    }

    handleClick = (event) => {
        this.setState({
            isHidden: 'visible'
        });
        if(this.domElem.current) {
            setTimeout(() => {
                this.domElem.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
               });
            }, 200);
        }
    }
    
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div id="main">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography 
                                    variant="h2"
                                    component="h4" 
                                    className="splash"
                                    id="name">
                                    Hello, I'm Travis Mingalone
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography 
                                    variant="h3" 
                                    className="splash"
                                    component="p"
                                    id="title">
                                    A Full Stack Developer
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    size="large"
                                    id="portbutton"
                                    component={Link} 
                                    to="/about" 
                                    onClick={e => this.handleClick(e)}>
                                    View my Work
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <AppBar 
                        position="static" 
                        id="nav" ref={this.domElem} 
                        style={{marginBottom: '10vh', visibility: `${this.state.isHidden}`}}>
                        <Toolbar>
                            <Typography variant="h6" id="brand">
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
                    <footer style={{color:`${theme.palette.primary.main}`, margin: 'auto'}} >
                        Copyright © Travis Mingalone 2019
                    </footer>
                </MuiThemeProvider>
            </Router> 
        )
    }
}