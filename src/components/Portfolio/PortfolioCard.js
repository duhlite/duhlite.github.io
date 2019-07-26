import React, { Component } from 'react';
import { Grid,
         Button, 
         Card, 
         CardActionArea,
         CardActions, 
         CardContent, 
         CardMedia,
         Typography } from '@material-ui/core';

export default class PortfolioCard extends Component {
  
  render() {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card style={{maxWidth: 400}} raised="true">
          <CardActionArea>
            <CardMedia
              style={{height: 200}}
              image={this.props.image}
              title={this.props.title}/>
                <CardContent>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2">
                    {this.props.main}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    component="p">
                    {this.props.secondary}
                  </Typography>
                </CardContent>
          </CardActionArea>
          <CardActions>
            <Button 
              size="small" 
              color="primary" 
              href={this.props.link}>
              View Site
            </Button>
            <Button 
              size="small" 
              color="primary" 
              href={this.props.git}>
              View Github
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}