import React from "react";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Grid, makeStyles } from "@material-ui/core";

import theme from '../../theme/theme';
import AboutCard from './AboutCard';
import aboutLinks from '../../constants/aboutCards';

const useStyles = makeStyles(theme => ({
    body: {
        height: '80vh',
        overflowX: 'hidden'
    }
}));

export default function About() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.body}>
                <Grid container spacing={4} justify="space-evenly" alignItems="center" style={{minHeight:'80vh'}}>
                    {
                        aboutLinks.map((link, i) => {
                            return (
                                <AboutCard
                                    key={i}
                                    title={link.title}
                                    body={link.body}
                                />
                            )
                        })
                    }
                </Grid>
            </div>
        </MuiThemeProvider>
    )
}