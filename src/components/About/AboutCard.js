import React, { Component } from 'react';
import { Grid, Paper, Card, CardContent, Typography } from '@material-ui/core';


export default class AboutCard extends Component {

  render() {
    return (
      <Grid item xs={12} md={5} align="center">
          <Paper style={{height: "60vh"}}>
              <Grid container direction="column" justify="center" spacing={0} alignItems="center" style={{minHeight:'60vh'}}>
                  <Grid item xs={12}>
                      <Card style={{width: '35vw', height: '50vh',color: 'black', backgroundColor: '#bdbdbd'}}
                            raised="true">
                          <CardContent>
                              <Typography variant="h6">
                                  {this.props.title}
                              </Typography>
                              <hr style={{borderTop: '1px solid black'}} />
                              <Typography variant="body1">
                                  {this.props.body}
                              </Typography>
                          </CardContent>
                      </Card>
                  </Grid>
              </Grid>
          </Paper>
      </Grid>
    )
  }
}