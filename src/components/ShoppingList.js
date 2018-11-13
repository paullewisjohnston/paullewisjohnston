import React, { Component } from 'react';
import { Container, List, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <List>
            {items.map(({ _id, name, color, icon}) => (
                <List.Item>
                  <Button circular color = {color} size='massive' icon={icon} onClick={this.onDeleteClick.bind(this, _id)}/>
                  {name}
                </List.Item>
            ))}
        </List>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
