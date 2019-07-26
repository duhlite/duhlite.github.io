import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

import links from '../../constants/portfolioLinks';
import PortfolioCard from './PortfolioCard';

const Body = {
    height: "80vh",
    flexGrow: 1,
    overflowX: "hidden"
}


export default class Portfolio extends Component {

    render() {
      return (
          <div style={Body}>
            <Grid container spacing={3} justify="space-evenly">
              {
                links.map((link, i) => {
                  return (
                    <PortfolioCard
                      key={i}
                      image={link.image}
                      title={link.title}
                      main={link.main}
                      secondary={link.secondary}
                      link={link.link}
                      git={link.git}
                    />
                )
              })
            }
          </Grid>
        </div>
        )
    }
}