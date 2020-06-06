import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinkedIn, GitHub, Email } from '@material-ui/icons';
import { Container, Grid, Typography, IconButton, Avatar} from '@material-ui/core';
import Border from './Border'
import Logo from '../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: '20px',
    color: 'default',
    background: '#FBFBFB',
  },
  title: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: '20px',
    margin: 'auto',
  },
  logo: {
    margin: 'auto',
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Border type='curved' scrollHeaderHeight={550} viewBoxHeight={20} background='white' fill={'#FBFBFB'}/>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid className={classes.title} item xs={12} sm={6}>
            <Typography variant="h4" className={classes.title}>Paul Lewis Johnston</Typography>
          </Grid>
          <Grid className={classes.social} item xs={12} sm={6}>
            <IconButton aria-label="linkedin" href='//linkedin.com/in/paul-lewis-johnston-3abb6b100/' target='_blank'>
              <LinkedIn color="default"/>
            </IconButton>
            <IconButton aria-label="github" href='//github.com/paullewisjohnston' target='_blank'>
            <GitHub/>
            </IconButton>
            <IconButton aria-label="email" href="mailto:pjohnston36@qub.ac.uk">
              <Email/>
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Avatar className={classes.logo} alt="Paul Lewis Johnston" src={Logo} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}