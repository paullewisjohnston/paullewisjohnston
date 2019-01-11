import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Container, Menu, Icon} from 'semantic-ui-react';

export default class GlobalNav extends Component {
  render() {
    return (
      <div style={{background:'#2E2E2E'}}>
        <Menu inverted borderless style={{background:'#2E2E2E'}} >
          <Container>
            <Menu.Item fitted='horizontally' as={Link} to='/'>
              <p style={{fontSize:'24px',fontFamily:'Arima Madurai, cursive'}}>Paul Lewis Johnston</p>
            </Menu.Item>
            <Menu.Menu fitted='horizontally' position='right'>
              <Menu.Item icon name='Dashboard' as={Link} to='/dashboard'>
                <Icon name='chart pie' size='big' style={{color:'white'}}/>
              </Menu.Item>
              <Menu.Item icon name='Github' as='a' href='//github.com/paullewisjohnston' target='_blank'>
                <Icon inverted name='github' size='big' style={{color:'white'}}/>
              </Menu.Item>
              <Menu.Item icon name='Home' as='a' href='//linkedin.com/in/paul-lewis-johnston-3abb6b100/' target='_blank'>
                <Icon name='linkedin' size='big' style={{color:'white'}}/>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    )
  }
}
