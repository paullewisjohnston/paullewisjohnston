import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
    year: '',
    description: '',
    height: '',
    width: '',
    depth: '',
    status: '',
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      year: this.state.year,
      description: this.state.description,
      height: this.state.height,
      width: this.state.width,
      depth: this.state.depth,
      status: this.state.status
    };

    // Add item via addItem action
    this.props.addItem(newItem);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="itemName">Name</Label>
                <Input type="text"
                  name="name"
                  id="itemName"
                  placeholder="Name"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="year"
                  id="itemYear"
                  placeholder="Year"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="description"
                  id="itemDescription"
                  placeholder="Description"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="height"
                  id="itemHeight"
                  placeholder="Height"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="width"
                  id="itemWidth"
                  placeholder="Width"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="depth"
                  id="itemDepth"
                  placeholder="Depth"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="status"
                  id="itemStatus"
                  placeholder="Status"
                  onChange={this.onChange}
                />
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Add Item
              </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
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
