import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Card, CardContent, Typography, Grid, Link, makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import theme from '../theme/theme';

const useStyles = makeStyles(theme => ({
    bg: {
        height: '82vh'
    },
    contact: {
        maxWidth: 345,
        margin: 'auto'
    },
    link: {
        marginLeft: '100px'
    },
    icon: {
        marginRight: '1vw'
    }
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.bg}>
                <Card className={classes.contact}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h4" style={{textAlign: "center"}} >
                                    Find me here!
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <Typography variant="h6" className={classes.link}>
                                    <Link 
                                        href={'https://www.github.com/duhlite'}
                                        target="_blank"
                                        rel="noopener">
                                        <FontAwesomeIcon icon={faGithub} className={classes.icon} size="lg"/>
                                        Github
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <Typography variant="h6" className={classes.link}>
                                    <Link 
                                        href={"https://www.linkedin.com/in/travis-mingalone/"}
                                        target="_blank"
                                        rel="noopener">
                                        <FontAwesomeIcon icon={faLinkedin} className={classes.icon} size="lg"/>
                                        LinkedIn
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <Typography variant="h6" className={classes.link}>
                                    <Link href={"mailto:travismingalone@gmail.com"}>
                                        <FontAwesomeIcon icon={faEnvelope} className={classes.icon} size="lg"/>
                                        Email
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </MuiThemeProvider>
    )
}