import React, { Component } from 'react';
import {Paper,TextField, Checkbox} from 'material-ui/';

class PageSearch extends Component {
  constructor(props){
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleFilterItem = this.handleFilterItem.bind(this);
  }

  render(){
    return (
      <div style = {this.props.styles.div}>
        <Paper style={this.props.styles.container} zDepth={0}>
            {this.props.name}
            <br/>
            <TextField id="text-field-controlled" value={this.props.searchText} onChange={this.handleSearchTextChange}/>
            <br/>
            <div style={this.props.styles.checkbox}>
              <Checkbox onCheck={this.handleFilterItem} checked={this.props.filterItem.length === 0|| this.props.filterItem.length === 2 } label={"Show All"}/>
              <br/>
              <Checkbox onCheck={this.handleFilterItem} value={'0'} checked={this.props.filterItem.indexOf('0') > -1 } label={"Show Jobs"}/>
              <br/>
              <Checkbox onCheck={this.handleFilterItem} value={'1'} checked={this.props.filterItem.indexOf('1') > -1 } label={"Show Countries"}/>
            </div>
        </Paper>
      </div>
    );
  }

  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }
  handleFilterItem(e) {
    this.props.onFilterItem(e.target.value);
  }
}

export default PageSearch;
