import React, { Component } from 'react';
import Page from './page/Page';
import Page2 from './page/Page2';
import PageSearch from './page/PageSearch';

const styles = {
  container: {
    overflow: 'auto',
    whiteSpace: 'nowrap',
  },
  content: {
    display: 'inline-block',
  }
};

class Pages extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
      movies: [],
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleTitleTextChange = this.handleTitleTextChange.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.removePage = this.removePage.bind(this);
    this.deletePage = this.deletePage.bind(this);
  }
  componentWillMount(){
    fetch('http://localhost:8080/api/movies/search/findByTitleContaining?title=')
    .then(response => response.json())
    .then(({_embedded: movies}) => this.setState(movies))
  }

  render(){
    return (
      <div style={styles.container}>
        {this.renderPages()}
      </div>
    );
  }

  renderPages(){
    return (
       <div style={styles.container}>
       <div style={styles.content}>
       <Page2
         key={'hello'}
         name={'hello'}
         tagline={'hello'}
         released={'hello'}
         removePage={'hello'}
         />
         </div>
         <div style={styles.content}>
         <PageSearch
           key={'search'}
           name={'search'}
           tagline={'search'}
           released={'search'}
           removePage={'search'}
           onSearchChange={this.handleSearchChange}
           />
           </div>
        {this.state.movies.map(page => (
          <div style={styles.content}>
              {page.released >= 2005 && page.title.indexOf(this.state.searchText) !== -1 &&
                <Page
                  key={page._links.self.href}
                  name={page.title}
                  tagline={page.tagline}
                  released={page.released}
                  self={page._links.self.href}
                  searchText={this.state.searchText}
                  onTitleTextChange={this.handleTitleTextChange}
                  textName={this.state.title}
                  updatePage={this.updatePage}
                  removePage={this.removePage}
                  deletePage={this.deletePage}
                  />
                }
              {page.released < 2005 && page.title.indexOf(this.state.searchText) !== -1 &&
                <Page2
                  key={page._links.self.href}
                  name={page.title}
                  tagline={page.tagline}
                  released={page.released}
                  searchText={this.state.searchText}
                  removePage={this.removePage}
                  />
                }
            </div>
        ))}
       </div>
    );
}

  removePage(removeName){
    const filteredPages = this.state.movies.filter(page => {
      return page.title !== removeName;
    });
    this.setState({ movies: filteredPages})
  }

  deletePage(url,name) {
    console.log(url);
    this.removePage(name);
    return fetch(url, { method: 'DELETE'}).then(response => response.json)
  }

//  updatePage(url,body) {
    // console.log(url);
    // //var myHeader = new Headers({"Content-Type": "application/json",});
    // return fetch(url,
    //   {
    //   method: "POST",
    //   mode: "no-cors",
    //   body: JSON.stringify({title: 'new'})
    //   }).then(response => response.json)
  // }

  updatePage(id, name){
    console.log(id+' '+name)
    this.setState({movies: this.state.movies.map(
            (el)=> el.title === id ? Object.assign({}, el, {name: name}) : el )
        });
    }

  handleTitleTextChange(name) {
  //   console.log(name)
  //   this.setState({
  //     movies: name
  // });
}

handleSearchChange(name) {
  this.setState({
    searchText: name
});
}
}
export default Pages;
