import React, {Component} from 'react'
import { connect } from 'react-redux';
import { getNavs, addNav } from '../actions/navActions';
import PropTypes from 'prop-types';
import {Menu, Sidebar, Icon} from 'semantic-ui-react'
import PageContainer from './page/PageContainer';
import ItemForm from './ItemForm';
import NavForm from './NavForm';
import ItemSearch from './ItemSearch';
import Logo from '../assets/logo.png';

class GlobalNav extends Component {
  componentDidMount() {
    this.props.getNavs();
  }

  state = {}

  onClick = (e, { name }) => {
    if(this.state.visible===name)
      this.setState({ visible: ''})
    else
      this.setState({ visible: name})
  }

  sidebarHide = () => {this.setState({ visible: ''})}

  render() {
    const { visible,dimmed } = this.state;
    //const { navs } = this.props.nav;
    //const nav = navs.pop();

    return (
      <div style={{height:'100vh', width:'100vw',display:'flex', flexDirection:'row'}}>
      <div style={{height:'100vh', width:'60px', background:'grey'}}>
        <Menu borderless icon inverted vertical visible width='very thin' style={{height:'50vh', width:'60px', background:'grey'}}>
        <Menu.Item name='home' as='a' onClick={this.onClick}>
           <img src={Logo} alt=''/>
        </Menu.Item>
        <Menu.Item name='plus' as='a' onClick={this.onClick}>
          <Icon color ='white' size='large' name='plus' />
        </Menu.Item>
        <Menu.Item name='user' as='a' onClick={this.onClick}>
          <Icon color ='white' size='large' name='user' />
        </Menu.Item>
      </Menu>
    </div>
      <Sidebar.Pushable>
        <Sidebar as={Menu} borderless animation='overlay' icon inverted color='teal' vertical visible={visible === 'user'} width='wide'>
          <Menu.Item as='a' disabled>
            <ItemForm/>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={visible} style={{height:'100vh'}}>
          <PageContainer/>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
    )
  }
}

GlobalNav.propTypes = {
  getNavs: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(
  mapStateToProps,
  { getNavs, addNav}
)(GlobalNav);
