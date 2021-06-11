import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Hidden, Toolbar, Container, Link, IconButton, Drawer, List, ListItem, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'rgb(46, 46, 46)',
  },
  appbar:{
    background: 'rgb(34, 34, 34, 0.8)',
    backdropFilter: 'saturate(180%) blur(20px)',
  },
  title: {
    flexGrow: 1,
    fontSize: 20,
  },
  menuItem: {
    padding: '5px 0px 0px 15px',
  },
  paper: {
    background: 'rgb(34, 34, 34, 0.8)',
    backdropFilter: 'saturate(180%) blur(20px)',
    color: 'white',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ['Home','GoCardless'];

  return (
    <div className={classes.root}>
      <Toolbar variant='dense' disableGutters/>
      {!menuOpen ? 
      <AppBar position="fixed" elevation={0} className={classes.appbar}>
        <Container fixed maxWidth='lg'>
          <Toolbar variant='dense' disableGutters>
            <Link component={RouterLink} to="/" underline='none' variant='h1' color="inherit" className={classes.title}>Paul Lewis Johnston</Link>
            <Hidden smDown>
              {menuItems.map((menuItem, index) => (
              <Link key={index} underline='none' component={RouterLink} to={index===0 ? '/' : menuItem.toLowerCase()} color="inherit" className={classes.menuItem}>{menuItem}</Link>
              ))}
            </Hidden>            
            <Hidden mdUp>
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <MenuIcon/>
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      : null} 
      <Drawer
        elevation={0}
        classes={{ paper: classes.paper }}
        variant="temporary"
        anchor="top"
        open={menuOpen}
        onClose={()=>setMenuOpen(false)}
      >
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItem component={RouterLink} to={index===0 ? '/' : menuItem.toLowerCase()} button key={menuItem} onClick={()=>setMenuOpen(false)}>
              <ListItemText primary={menuItem} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}