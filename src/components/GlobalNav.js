import React, {Component} from 'react'
import {Image, Container, Menu, Icon} from 'semantic-ui-react'
import SectionContainer from './SectionContainer';
import ItemModal from './ItemModal';
import Logo from '../assets/logo.png';


export default class GlobalNav extends Component {
  state = {}

  onClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    //const { activeItem } = this.state
    return (
      <div>
        <Menu borderless fixed='top'>
          <Container>
            <Menu.Item fitted='horizontally' as='a'onClick={this.onClick}>
              <Image size='mini' src={Logo} style={{ marginRight: '10px'}}/>
              <p style={{fontFamily:'Arima Madurai, cursive', fontSize:'26px'}}>paullewisjohnston</p>
            </Menu.Item>
            <Menu.Menu fitted='horizontally' position='right'>
              <Menu.Item icon name='Github' as='a' href='//github.com/paullewisjohnston' target='_blank'>
                <Icon name='github' size='big'/>
              </Menu.Item>
              <Menu.Item icon name='Home' as='a' href='//linkedin.com/in/paul-lewis-johnston-3abb6b100/' target='_blank'>
                <Icon name='linkedin' size='big'/>
              </Menu.Item>
              <Menu.Item icon name='Add Item' as='a'>
                <ItemModal/>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
        <SectionContainer/>
      </div>
    )
  }
}
