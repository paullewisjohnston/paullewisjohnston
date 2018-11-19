import React, { Component } from 'react';
import { Form} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { editItem } from '../actions/itemActions';

class EditItemForm extends Component {
  state = {
    type: this.props.item.type,
    backgroundColor: this.props.item.backgroundColor,
    // backgroundImage: this.props.item.backgroundImage,
    // color: this.props.item.color,
    // image: this.props.item.image,
    // heading1: this.props.item.heading1,
    // heading2: this.props.item.heading2,
    // heading3: this.props.item.heading3,
    // paragraph1: this.props.item.paragraph1,
    // paragraph2: this.props.item.paragraph2,
    // paragraph3: this.props.item.paragraph3,
    // date: this.props.item.date,
    // dateStart: this.props.item.dateStart,
    // dateEnd: this.props.item.dateEnd
  };

  onChange = (e, { name, value }) => this.setState({ [name]: value });

  onSubmit = e => {
    e.preventDefault();

    const editItem = {
      type: this.state.type,
      backgroundColor: this.state.backgroundColor,
      // backgroundImage: this.state.backgroundImage,
      // color: this.state.color,
      // image: this.state.image,
      // heading1: this.state.heading1,
      // heading2: this.state.heading2,
      // heading3: this.state.heading3,
      // paragraph1: this.state.paragraph1,
      // paragraph2: this.state.paragraph2,
      // paragraph3: this.state.paragraph3,
      // date: this.state.date,
      // dateStart: this.state.dateStart,
      // dateEnd: this.state.dateEnd
    };

    // Add nav via addNav action
    this.props.edit(editItem);
  };


  render() {
    return (
            <Form inverted onSubmit={this.onSubmit}>
              <Form.Input inverted fluid label={this.props.item.type} placeholder={this.props.item.type} name='type' onChange={this.onChange}/>
              <Form.Input inverted fluid label='backgroundColor' placeholder='backgroundColor' name='backgroundColor' onChange={this.onChange}/>
              <Form.Button inverted content='Submit' />
            </Form>
    );
  }
}

const mapStateToProps = state => ({
  type: state.type,
  backgroundColor: state.backgroundColor,
});

export default connect(
  mapStateToProps,
  { editItem }
)(EditItemForm);
