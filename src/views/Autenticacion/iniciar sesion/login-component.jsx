import React from "react";
// import ReactDOM from "react-dom";
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
import Back from "../../../assets/img/login2.jpg"
import { VpnKeyRounded } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function Login(props) {
  const classes = useStyles();
  const { /* classes,  */...rest } = props;
  return (
    <div className="App" style={{ backgroundImage: `url(${Back})` }}>
      <Header
          brand="App Chat React"
          rightLinks={<HeaderLinks />}
          fixed
          color="info"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
      /> 
      <div className="Container2">
        <container fixed>
          {/* <i class="fas fa-user-plus" ></i> */}
          <VpnKeyRounded className={classes.icons} id="icons"  />
          <h2>Iniciar Sesión</h2>
          <form
          onSubmit={e => {
            e.preventDefault();
            console.log(props);
            props.handleLogin(props);
            //props.history.push('/chat');

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
                    onChange={props.handleLoginForm}
                    value={props.email}
                    name="email"
                  />
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin} color="white">
              
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField  label="Contraseña"
                    type="password"
                    placeholder="Contraseña"
                    onChange={props.handleLoginForm}
                    value={props.password}
                    name="password"
                  />
                </Grid>
              </Grid>
            </div>
          
            <Button color="primary" type="submit" >Iniciar Sesión</Button>
          </form>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} , App Chat React
        </div>
        </container>
      </div>
    </div>
  );
}
