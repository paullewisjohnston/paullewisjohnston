import React, { Component } from 'react';
import PageJob from './pageComponents/Page_Job';
import PageProject from './pageComponents/Page_Project';
import PageCountry from './pageComponents/Page_Country';

const styles = {
  container: {
    overflow: 'auto',
    whiteSpace: 'nowrap',
  },
  content: {
    display: 'inline-block',
    whiteSpace: 'normal',
  }
};

class Pages extends Component {
  render(){
    return (
      <div>
        {this.renderPages()}
      </div>
    );
  }

  renderPages(){
    return (
         <div style={{padding:this.props.padding}}>
         <div style={styles.container}>
        {this.props.data.map(page => (
          <div style={styles.content}>
              {page.released >= 2008 &&
                page.title.toLowerCase().indexOf(this.props.searchText) !== -1 &&
                (this.props.filterItem.indexOf('0') > -1 || this.props.filterItem.length === 0)  &&
                <PageJob
                  key={page._links.self.href}
                  name={page.title}
                  tagline={page.tagline}
                  released={page.released}
                  self={page._links.self.href}
                  searchText={this.props.searchText}
                  updatePage={this.props.updatePage}
                  removePage={this.props.removePage}
                  deletePage={this.props.deletePage}
                  />
                }
              {page.released < 2008 &&
                page.title.toLowerCase().indexOf(this.props.searchText) !== -1 &&
                (this.props.filterItem.indexOf('1') > -1 || this.props.filterItem.length === 0) &&
                <PageCountry
                  key={page._links.self.href}
                  name={page.title}
                  tagline={page.tagline}
                  released={page.released}
                  searchText={this.props.searchText}
                  removePage={this.props.removePage}
                  />
              }
          </div>
        ))}
        </div>
        </div>
    );
  }
}
export default Pages;
