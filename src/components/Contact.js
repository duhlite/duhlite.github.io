import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import theme from '../theme/theme';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const linkStyle = {
    float: 'left',
    marginRight: '1vw'
}

export default function Contact() {
    return (
        <MuiThemeProvider theme={theme}>
            <div style={{height: '82vh'}}>
                <Card style={{maxWidth: 345, margin: 'auto'}}>
                    <CardContent>
                        <Typography variant="h6" style={{marginBottom: '3vh'}} >
                            My existence on the Internet
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <FontAwesomeIcon icon={faGithub} style={linkStyle}/>
                                <Typography variant="body2">
                                    <a href="https://www.github.com/duhlite">Github</a>
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <FontAwesomeIcon icon={faLinkedin} style={linkStyle} />
                                <Typography variant="body2">
                                    <a href="https://www.linkedin.com/in/travis-mingalone/">LinkedIn</a>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FontAwesomeIcon icon={faEnvelope} style={linkStyle} />
                                <Typography variant="body2">
                                    <a href="mailto:travismingalone@gmail.com">Email</a>
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </MuiThemeProvider>
    )
}