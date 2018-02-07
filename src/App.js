import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

const SEARCH_KEYWORD = "Search your keyword here ..."

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }
  render() {
    return (
      <div style={styles.container} className="App">
        <InputGroup style={styles.search}>
          <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
          </InputGroupButtonDropdown>
          <Input placeholder={SEARCH_KEYWORD} />
          <InputGroupAddon addonType="append"><Button color="secondary">{"I'm a button"}</Button></InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Hello</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

const styles = {
  container:{

  },
  search:{
    padding:20,
  }
};

export default App;
