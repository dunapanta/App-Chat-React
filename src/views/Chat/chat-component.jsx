import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import AccountCircle from '@material-ui/icons/AccountCircle';

import Button from '@material-ui/core/Button';


import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';


import './chat.css';
import Monitor from '../../assets/img/login2.jpg';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },button: {
        margin: theme.spacing(1),
      },
  }));

export const Chat = () => {
    const classes = useStyles();
    return (
        <div className="container">
            
           <header className="header">
              App Chat React 
           </header>
           <section className="section" style={{backgroundImage:`url(${Monitor})`}}>
            aqui va el chat de conversación
           </section>
           <footer className="footer">
           <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment"style={{fontSize:100 }}></InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
          <InputAdornment position="Start" className="input" >
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      {/* <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}        
        position="end"
        
      >
        Enviar
      </Button> */}
      <Button
        variant="contained"
        disabled
        color="primary"
        className={classes.button}
        startIcon={<KeyboardVoiceIcon />}
        id ="input1"
      >
       
      </Button>
           </footer>
      
        </div>
        );
}

export default Chat;