import React, {Component} from 'react';
import {Image, Container, Menu, Icon} from 'semantic-ui-react';
import Logo from '../assets/logo.png';


export default class GlobalNav extends Component {
  render() {
    return (
      <div style={{background:'#2E2E2E'}}>
        <Menu inverted borderless style={{background:'#2E2E2E'}} >
          <Container>
            <Menu.Item fitted='horizontally' as='a'>
              <Image size='mini' src={Logo} style={{ marginRight: '10px'}}/>
              <p style={{fontSize:'24px',fontFamily:'Arima Madurai, cursive'}}>paullewisjohnston</p>
            </Menu.Item>
            <Menu.Menu fitted='horizontally' position='right'>
              <Menu.Item icon name='Github' as='a' href='//github.com/paullewisjohnston' target='_blank'>
                <Icon name='github' size='big'/>
              </Menu.Item>
              <Menu.Item icon name='Home' as='a' href='//linkedin.com/in/paul-lewis-johnston-3abb6b100/' target='_blank'>
                <Icon name='linkedin' size='big'/>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    )
  }
}
