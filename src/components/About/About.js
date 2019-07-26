import React from "react";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Paper, Typography, Card, CardContent, Grid, makeStyles } from "@material-ui/core";

import theme from '../../theme/theme'

const useStyles = makeStyles(theme => ({
    body: {
        height: '80vh',
        overflowX: 'hidden'
    },
    paper: {
        height: '60vh'
    },
    card: {
        width: '30vw',
        height: '40vh'
    }
}));

export default function About() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.body}>
                <Grid container spacing={4} justify="space-evenly" alignItems="center" style={{minHeight:'80vh'}}>
                    <Grid item xs={12} md={5} align="center">
                        <Paper className={classes.paper}>
                            <Grid container direction="column" justify="center" spacing={0} alignItems="center" style={{minHeight:'60vh'}}>
                                <Grid item xs={12}>
                                    <Card style={{backgroundColor:`${theme.palette.primary.main}`}}
                                          className={classes.card}
                                          raised="true">
                                        <CardContent>
                                            <Typography variant="h6">
                                                Passion
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={5} align="center">
                        <Paper className={classes.paper} alignItems="center">
                            <Grid container direction="column" justify="center" spacing={0} alignItems="center" style={{minHeight:'60vh'}}>
                                <Grid item xs={12}>
                                    <Card style={{backgroundColor:`${theme.palette.primary.main}`}}
                                          className={classes.card}
                                          raised="true">
                                        <CardContent>
                                            <Typography variant="h6">
                                                Skills
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </MuiThemeProvider>
    )
}