import React from 'react';
import {Typography, AppBar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Videoplayer from './components/Videoplayer';
import Notifications from './components/Notifications';
import Sidebar from './components/Sidebar';

const useStyles = makeStyles((theme) =>({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid #3495ce',
        color: 'wheat',
        background: '#0f1325',    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
      image: {
        marginLeft: '15px',
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },
}))

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography variant="h3" align ="center">
                Komrade Stroom
            </Typography>
        </AppBar>
        <Videoplayer />
        <Sidebar >
            <Notifications />
        </Sidebar>
        </div>
    )
}
export default App;

