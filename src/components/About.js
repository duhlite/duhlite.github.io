import React from "react";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Paper, Typography } from "@material-ui/core";

import theme from '../theme/theme'

const Body = {
    height: '82vh'
}

export default function About() {
    return (
        <MuiThemeProvider theme={theme}>
            <div style={Body}>
                <Paper>
                    <Typography variant="h6">
                        Passion
                    </Typography>
                </Paper>
                <Paper>
                    <Typography variant="h6">
                        Skills
                    </Typography>
                </Paper>
            </div>
        </MuiThemeProvider>
    )
}