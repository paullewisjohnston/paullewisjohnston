import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../actions/itemActions';
import Job from './type/Job';
import Location from './type/Location';
import Education from './type/Education';
import Project from './type/Project';
import PropTypes from 'prop-types';

const styles = {
  main: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    overflowY: 'hidden',
    WebkitOverflowScrolling: 'touch',
    height: '100vh',
  },
  section: {
    display: 'flex',
    flex: '0 0 auto',
    flexDirection:'row',
    color:'white',
    fontFamily: 'Arima Madurai, cursive',
    fontSize:40,
    overflow:'hidden',
    height:'100vh',
    width:'1100px',
    alignItems:'center',
    alignSelf:'center',
  },
  border: {
    height:'100vh',
    width:'60px',
    //url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="500" ><path d="M6 64 L4 52 C2 28 8 22 4 0 L0 0 L0 64 Z"  fill="blue"/></svg>');
  }
};

class PageContainer extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <div style={styles.main}>
          {items.map(item => ([
            <section key={item._id} style={{...styles.section, background:item.color}}>
                {(true  && <Job item={item}/>)}
            </section>
            ]))}
      </div>
    );
  }
}

PageContainer.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(PageContainer);
