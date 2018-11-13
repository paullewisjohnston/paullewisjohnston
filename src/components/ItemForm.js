import React, { Component } from 'react';
import { Form} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
  state = {
    title: '',
    desc: '',
    image: '',
    color: '',
  };

  onChange = (e, { name, value }) => this.setState({ [name]: value });

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      title: this.state.title,
      desc: this.state.desc,
      image: this.state.image,
      color: this.state.color,
    };

    // Add item via addItem action
    this.props.addItem(newItem);

    this.clearForm();
  };

  clearForm = () => this.setState({name: '', color: '', icon: '', });

  render() {
    return (
            <Form inverted onSubmit={this.onSubmit}>
              <Form.Input inverted fluid label='Title' placeholder='Title' name='title' onChange={this.onChange}/>
              <Form.Input inverted fluid label='Desc' placeholder='Desc' name='desc' onChange={this.onChange}/>
              <Form.Input inverted fluid label='Image' placeholder='Image' name='image' onChange={this.onChange}/>
              <Form.Input inverted fluid label='Color' placeholder='Color' name='color' onChange={this.onChange}/>
              <Form.Button inverted content='Submit' />
            </Form>
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
