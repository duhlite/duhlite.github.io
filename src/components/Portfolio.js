import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import links from '../constants/portfolioLinks';

const Body = {
    height: "100vh",
    flexGrow: 1,
    overflowX: "hidden"
}

const CardStyle = {
    maxWidth: 400
}

const MediaStyle = {
    height: 200
}


export default class Portfolio extends Component {

    render() {
      return (
          <div style={Body}>
            <Grid container spacing={3} justify="space-evenly">
              {
                links.map((link, i) => {
                  return (
                    <Grid item key={i} xs={12} md={6} lg={4}>
                      <Card style={CardStyle}>
                        <CardActionArea>
                          <CardMedia
                            style={MediaStyle}
                            image={link.image}
                            title={link.title}/>
                              <CardContent>
                                <Typography 
                                  gutterBottom 
                                  variant="h5" 
                                  component="h2">
                                  {link.main}
                                </Typography>
                                <Typography 
                                  variant="body2" 
                                  color="textSecondary" 
                                  component="p">
                                  {link.secondary}
                                </Typography>
                              </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button 
                            size="small" 
                            color="primary" 
                            href={link.link}>
                            View Site
                          </Button>
                          <Button 
                            size="small" 
                            color="primary" 
                            href={link.git}>
                            View Github
                          </Button>
                        </CardActions>
                    </Card>
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
        )
    }
}