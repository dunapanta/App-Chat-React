import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Login from '../../../../assets/img/login2.jpg';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Register(props) {
  const classes = useStyles();
  const { /* classes,  */...rest } = props;
  //const { classes, ...rest } = this.props;
  
  return (
    <div className="App" style={{backgroundImage: `url(${Login})`}}>
      <div>
        <Header
          brand="App Chat React"
          rightLinks={<HeaderLinks />}
          fixed
          color="primary"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        /> 
      </div>
      
      
      <div className="Container">
        <i class="fas fa-user-plus" ></i>

        <h2>Registro</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            props.handleRegisterform();
            
          }}
        >
          <div className={classes.margin}>

            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField label="@ Email"
                  type="email"
                  placeholder="Correo Electronico"
                  onChange={props.handleRegisterForm}
                  value={props.email}
                  name="email"
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>

            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField label="Contraseña"
                  type="password"
                  placeholder="Contraseña"
                  onChange={props.handleRegisterForm}
                  value={props.password}
                  name="password"
                />
              </Grid>
            </Grid>
          </div>
          <Button color="primary" type="submit" >Save</Button>
        </form>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , App Chat React
        </div>
      </div>
    </div>
      
    
  );
}
