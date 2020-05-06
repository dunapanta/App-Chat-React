/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { PersonAdd, VpnKeyRounded } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
        <Link to="/registro" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Button
              href="https://github.com/dunapanta/App-Chat-React"
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              <PersonAdd className={classes.icons} /> REGISTRARSE
            </Button>
        </Link>
      </ListItem>
     

      
      <ListItem className={classes.listItem}>
        <Link to="/registro" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Button
            href="https://github.com/dunapanta/App-Chat-React"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <VpnKeyRounded className={classes.icons} /> INGRESAR
          </Button>
        </Link>
      </ListItem>
      

      <ListItem className={classes.listItem}>
        <Tooltip
          id="github-tooltip"
          title="Ver Repositorio de Github"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/dunapanta/App-Chat-React"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
