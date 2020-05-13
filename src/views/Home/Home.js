import React, {Component} from "react";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import AppInfo from 'views/Home/HomeSections/AppInfo';
import Integrantes from 'views/Home/HomeSections/Integrantes';

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Home extends Component {

    render(){
      const { classes, ...rest } = this.props;
      return(
        <div>
            <Header
              brand="App Chat React"
              rightLinks={<HeaderLinks />}
              fixed
              color="transparent"
              changeColorOnScroll={{
                height: 400,
                color: "white"
              }}
              {...rest}
            />
            <Parallax image={require("assets/img/parallax-img.jpg")}>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem>
                    <div className={classes.brand}>
                      <h1 className={classes.title}>Aplicación de Chat</h1>
                      <h3 className={classes.subtitle}>
                        Implementada con Firebase
                      </h3>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <AppInfo />
              <Integrantes />
            </div>
          </div>
          <Footer />
        </div>
        );
    }
    
    
}

export default withStyles(componentsStyle)(Home);
