import React, { Component } from 'react';
import { Grid, Paper, Card, CardContent, Typography } from '@material-ui/core';


export default class AboutCard extends Component {

  render() {
    return (
      <Grid item xs={12} md={5} align="center">
          <Paper style={{height: "60vh"}}>
              <Grid container direction="column" justify="center" spacing={0} alignItems="center" style={{minHeight:'60vh'}}>
                  <Grid item xs={10}>
                      <Card className="aboutCard" 
                            style={{height: '50vh',
                                    overflowY: 'scroll',
                                    color: 'black', 
                                    backgroundColor: '#bdbdbd'}}
                            raised="true">
                          <CardContent>
                              <Typography variant="h4">
                                  {this.props.title}
                              </Typography>
                              <hr style={{borderTop: '1px solid black'}} />
                                  {this.props.body.map((words, i) => {
                                      return (
                                          <div key={i}>
                                              <Typography variant="h6">
                                                  {words}
                                                  <br /><br />
                                              </Typography>
                                          </div>
                                      )
                                  })}
                          </CardContent>
                      </Card>
                  </Grid>
              </Grid>
          </Paper>
      </Grid>
    )
  }
}