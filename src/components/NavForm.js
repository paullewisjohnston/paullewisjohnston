import React, { Component } from 'react';
import { Form} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { addNav } from '../actions/navActions';

class NavModal extends Component {
  state = {
    color: '',
  };

  onChange = (e, { name, value }) => this.setState({ [name]: value });

  onSubmit = e => {
    e.preventDefault();

    const newNav = {
      color: this.state.color,
    };

    // Add nav via addNav action
    this.props.addNav(newNav);

    this.clearForm();
  };

  clearForm = () => this.setState({color: ''});

  render() {
    return (
            <Form inverted onSubmit={this.onSubmit}>
              <Form.Input inverted fluid label='Color' placeholder='Color' name='color' onChange={this.onChange}/>
              <Form.Button inverted content='Submit' />
            </Form>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(
  mapStateToProps,
  { addNav }
)(NavModal);
