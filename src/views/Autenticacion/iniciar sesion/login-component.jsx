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

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Register(props) {
  const classes = useStyles();
  return (
    <div className="login">
      <container fixed>
        <h2>Iniciar Sesión</h2>
        <form>
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
          <div className={classes.margin}>

            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField label="Contraseña"
                  type="password"
                  placeholder="Contraseña"
                  onChange={props.handleLoginForm}
                  value={props.password}
                  name="password"
                />
              </Grid>
            </Grid>
          </div>
         
          <Button variant="contained"color="primary">Iniciar Sesión</Button>
        </form>
      </container>
    </div>
  );
}
