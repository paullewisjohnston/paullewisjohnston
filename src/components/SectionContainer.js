import React, { Component } from 'react';
import {Segment, Button, Icon} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import Job from './type/Job';
import Location from './type/Location';
import Education from './type/Education';
import Project from './type/Project';
import PropTypes from 'prop-types';

class SectionContainer extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <div style={{padding: '60px 0 0' }}>
          {items.map(item => ([
            <Segment secondary key={item._id} vertical>
              <Button icon onClick={this.onDeleteClick.bind(this, item._id)}>
                <Icon name='delete' />
              </Button>
                {(item.type==='job' && <Job item={item}/>)}
                {(item.type==='eduction'  && <Education item={item}/>)}
                {(item.type==='location'  && <Location item={item}/>)}
                {(item.type==='project'  && <Project item={item}/>)}
            </Segment>
            ]))}
        </div>
    );
  }
}

SectionContainer.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(SectionContainer);
