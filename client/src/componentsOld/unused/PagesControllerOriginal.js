import React, { Component } from 'react';
import Pages from './Pages';
import PageSearch from './page/PageSearch';

class PagesController extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSearch: false,
      searchText: '',
      movies: [],
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.showSearch = this.showSearch.bind(this);
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
      <div>
        {this.renderPages()}
      </div>
    );
  }

  renderPages(){
    return (
      <Pages
        movies={this.state.movies}
        onShowSearch={this.showSearch}
        showSearch={this.state.showSearch}
        onSearchTextChange={this.handleSearchTextChange}
        searchText={this.state.searchText}
        updatePage={this.updatePage}
        removePage={this.removePage}
        deletePage={this.deletePage}
      />
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

  showSearch(){
    if (this.state.showSearch === false)
    {
      this.setState({showSearch:true})
    }
    else
    {
      this.setState({showSearch:false})
    }
    }

  handleSearchTextChange(name) {
    this.setState({
      searchText: name
    });
  }
}
export default PagesController;
