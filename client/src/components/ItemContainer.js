import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '20%',
    maxWidth: 100,
    backgroundColor: theme.palette.background.paper,
  },
});

class ItemContainer extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <List>
        {items.map(({ _id, name }) => (
          <List>
            {items.map(({ _id, name }) => (
              <ListItem button onClick={this.onDeleteClick.bind(this,_id)}>
                {name}
              </ListItem>
            ))}
          </List>
        ))}
      </List>
    );
  }
}

ItemContainer.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(withStyles(styles)(ItemContainer));
