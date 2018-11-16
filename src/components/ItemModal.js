import React, { Component } from 'react';
import { Form, Modal, Icon, Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

// const optionsType = [
//   { key: 'job', text: 'Job', value: 'job' },
//   { key: 'education', text: 'Education', value: 'Education' },
//   { key: 'location', text: 'Location', value: 'Location' },
//   { key: 'project', text: 'Project', value: 'Project' },
// ]
// const optionsColor = [
//   { key: 'lg', text: 'Light Grey', value: 'lightgrey' },
//   { key: 'g', text: 'Grey', value: 'grey' },
//   { key: 'w', text: 'White', value: 'white' },
//   { key: 'b', text: 'Black', value: 'black' }
// ]

class ItemModal extends Component {
  state = {
    type: '',
    backgroundColor: '',
    backgroundImage: '',
    color: '',
    image: '',
    heading1: '',
    heading2: '',
    heading3: '',
    paragraph1: '',
    paragraph2: '',
    paragraph3: '',
    date: '',
    dateStart: '',
    dateEnd: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      type: this.state.type,
      backgroundColor: this.state.backgroundColor,
      backgroundImage: this.state.backgroundImage,
      color: this.state.color,
      image: this.state.image,
      heading1: this.state.heading1,
      heading2: this.state.heading2,
      heading3: this.state.heading3,
      paragraph1: this.state.paragraph1,
      paragraph2: this.state.paragraph2,
      paragraph3: this.state.paragraph3,
      date: this.state.date,
      dateStart: this.state.dateStart,
      dateEnd: this.state.dateEnd
    };

    // Add item via addItem action
    this.props.addItem(newItem);

    this.clearForm();
};

clearForm = () => this.setState({
    type: '',
    backgroundColor: '',
    backgroundImage: '',
    color: '',
    image: '',
    heading1: '',
    heading2: '',
    heading3: '',
    paragraph1: '',
    paragraph2: '',
    paragraph3: '',
    date: '',
    dateStart: '',
    dateEnd: ''
  });

  render() {
    return (
        <Modal
          onActionClick={this.onSubmit}
          trigger={<Icon size='large' name='plus' />}
          header='New Item'
          content={
          <Container style={{width:'80%'}}>
            <Form>
              <Form.Input label='Type' placeholder='Type' name='type' onChange={this.onChange}/>
              <Form.Input label='Background Color' placeholder='Background Color' name='backgroundColor' onChange={this.onChange}/>
              <Form.Input label='Background Image' placeholder='Background Image' name='backgroundImage' onChange={this.onChange}/>
              <Form.Input label='Color' placeholder='Color' name='color' onChange={this.onChange}/>
              <Form.Input label='Image' placeholder='Image' name='image' onChange={this.onChange}/>
              <Form.Input label='Heading 1' placeholder='Heading 1' name='heading1' onChange={this.onChange}/>
              <Form.Input label='Heading 2' placeholder='Heading 2' name='heading2' onChange={this.onChange}/>
              <Form.Input label='Heading 3' placeholder='Heading 3' name='heading3' onChange={this.onChange}/>
              <Form.Input label='Paragraph 1' placeholder='Paragraph 1' name='paragraph1' onChange={this.onChange}/>
              <Form.Input label='Paragraph 2' placeholder='Paragraph 2' name='paragraph2' onChange={this.onChange}/>
              <Form.Input label='Paragraph 3' placeholder='Paragraph 3' name='paragraph3' onChange={this.onChange}/>
              <Form.Input label='Date' placeholder='Date' name='date' onChange={this.onChange}/>
              <Form.Input label='Date Start' placeholder='Date Start' name='dateStart' onChange={this.onChange}/>
              <Form.Input label='Date End' placeholder='Date End' name='dateEnd' onChange={this.onChange}/>
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
