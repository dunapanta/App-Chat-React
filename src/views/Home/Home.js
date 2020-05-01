import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Home = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));

        const classes = useStyles();
        return(

            <div className={classes.root}>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </div>
        );
    
}

export default Home;