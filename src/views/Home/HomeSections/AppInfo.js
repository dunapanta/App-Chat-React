import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import SvgIcon from '@material-ui/core/SvgIcon';

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

function ReactIcon (props) {
    return (
        <SvgIcon {...props}>
            <path d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z" />
        </SvgIcon>
    );
  }

class AppInfo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Acerca de App Chat React</h2>
            <h5 className={classes.description}>
              La aplicación web <strong>Chat App React </strong> es una aplicación
              de tipo mensajería en tiempo real en la que se puede establecer comunicación
              entre los diferentes usuarios registrados en la aplicación. La aplicación esta
              implementada con tecnologías de frontend React, Redux y Material UI y 
              para el backend se hace uso de Firebase. 
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="React"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={ReactIcon}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Redux"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Firebase"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

AppInfo.propTypes = {
  classes: PropTypes.object
};

export default withStyles(productStyle)(AppInfo);
