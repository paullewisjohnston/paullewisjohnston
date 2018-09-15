import React, { Component } from 'react';
import NavigationContainer from './navigation/NavigationContainer';
import PageContainer from './page/PageContainer';

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {
      padding:'0 0 0 64px',
      navItem: 0,
      menuItem: 0,
      filterItem: [],
      searchText: '',
      data: [],
      user:[],
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.navItem = this.navItem.bind(this);
    this.menuItem = this.menuItem.bind(this);
    this.filterItem = this.filterItem.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.removePage = this.removePage.bind(this);
    this.deletePage = this.deletePage.bind(this);
  }
  componentWillMount(){

    // fetch(this.props.url)
    // .then(response => response.json())
    // .then(({_embedded: data}) => this.setState(data))
    this.setState(this.props.data._embedded);
  }


  render(){
    return (
      <div>
        {this.renderNav()}
        {this.renderPages()}
      </div>
    );
  }

  renderNav(){
    return (
      <NavigationContainer
        data={this.state.data}
        onNavItem={this.navItem}
        navItem={this.state.navItem}
        onMenuItem={this.menuItem}
        menuItem={this.state.menuItem}
        onFilterItem={this.filterItem}
        filterItem={this.state.filterItem}
        onSearchTextChange={this.handleSearchTextChange}
        searchText={this.state.searchText}
      />
    );
}

  renderPages(){
    return (
      <PageContainer
        padding={this.state.padding}
        data={this.state.data}
        navItem={this.state.navItem}
        filterItem={this.state.filterItem}
        searchText={this.state.searchText}
        updatePage={this.updatePage}
        removePage={this.removePage}
        deletePage={this.deletePage}
      />
    );
}

  removePage(removeName){
    const filteredPages = this.state.data.filter(page => {
      return page.title !== removeName;
    });
    this.setState({ data: filteredPages})
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
    this.setState({data: this.state.data.map(
            (el)=> el.title === id ? Object.assign({}, el, {name: name}) : el )
        });
    }

  menuItem(itemNum){
    console.log(itemNum)
    if (this.state.menuItem === itemNum)
    {
      this.setState({
          menuItem:0,
          padding: '0 0 0 64px',
        })
    }
    else
    {
      this.setState({
          menuItem:itemNum,
          padding: '0 0 0 364px',
        })
    }
  }

  navItem(itemNum){
    console.log(itemNum)
    if (this.state.navItem === itemNum)
    {
      this.setState({
          navItem:0,
          padding: '0 0 0 64px',
        })
    }
    else
    {
      switch (itemNum) {
        case 0:this.context.router.push('/');
        break;
        case 1:this.context.router.push('/test');
        break;
        default:this.context.router.push('/');
      }
    }
  }

    filterItem(itemNum){
      var checkedItems= this.state.filterItem.slice(0);
      var index= this.state.filterItem.indexOf(itemNum);
      if (index > -1)
      {
        checkedItems.splice(index, 1);
        this.setState({filterItem:checkedItems})
      }
      else
        checkedItems.push(itemNum);
        this.setState({filterItem:checkedItems})
      }

  handleSearchTextChange(name) {
    this.setState({
      searchText: name
    });
  }
}
export default Container;
