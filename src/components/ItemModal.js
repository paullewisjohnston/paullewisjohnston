import React, { Component } from 'react';
import { Form, Modal, Icon, Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
  state = {
    name: '',
    color: '',
    icon: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      color: this.state.color,
      icon: this.state.icon,
    };

    // Add item via addItem action
    this.props.addItem(newItem);

    this.clearForm;
};

clearForm = () => this.setState({name: '', color: '', icon: '', });


  render() {
    return (
        <Modal
          onActionClick={this.onSubmit}
          trigger={<Icon color ='red' size='large' name='gamepad' />}
          header='New Item'
          content={
            <Container>
            <Form>
              <Form.Input label='Name' placeholder='Name' name='name' onChange={this.onChange}/>
              <Form.Input label='Color' placeholder='Color' name='color' onChange={this.onChange}/>
              <Form.Input label='Icon' placeholder='Icon' name='icon' onChange={this.onChange}/>
            </Form>
          </Container>
          }
          actions={['Submit']}
        />
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
