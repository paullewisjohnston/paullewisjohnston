import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Container} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
    background: 'rgb(34, 34, 34)',
  },
  title: {
    fontSize: 20,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Container fixed maxWidth='lg'>
          <Toolbar disableGutters variant='dense'>
            <Typography variant="h1" className={classes.title}>
              Paul Lewis Johnston
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}