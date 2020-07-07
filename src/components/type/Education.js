import React from 'react';
import { Container, Grid, Avatar, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content:{
    margin: 'auto',
  },
  sm: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: 'auto',
  },
  md: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  lg: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

export default function Education(props) {
  const classes = useStyles();
  return(
  <Container fixed maxWidth='lg'>
    <Grid container spacing={3}>
      <Hidden mdUp>
      <Grid item xs={12}>
        <Avatar className={classes.sm} alt="Queen's University Belfast" src={require("../../assets/images/"+props.item.image)} />
      </Grid>
      </Hidden>
      <Grid className={classes.content} item sm={12} md={9}>
        <h2><b>{props.item.university},</b> {props.item.course}</h2>
        <p>{props.item.daterange}</p>
        <p>{props.item.modules}</p>
      </Grid>
      <Hidden smDown lgUp>
        <Grid item xs={12} sm={3}>
          <Avatar className={classes.md} alt="Queen's University Belfast" src={require("../../assets/images/"+props.item.image)} />
        </Grid>
      </Hidden>
      <Hidden mdDown>
        <Grid item sm={3}>
          <Avatar className={classes.lg} alt="Queen's University Belfast" src={require("../../assets/images/"+props.item.image)} />
        </Grid>
      </Hidden>
    </Grid>
  </Container>
  );
}
