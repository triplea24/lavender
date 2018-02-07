import React, { Component } from 'react';
import './App.css';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
 } from 'reactstrap';
import GoogleMapReact from 'google-map-react';

// TODO: Should be ommited!!!
const GOOGLE_MAP_KEY = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "AIzaSyAPcDa3xgIACldjPxgQNfIpvK-OrrPeQWQ" : "AIzaSyAUnr5kDABtuQ_f0L3jLh-X1hu1Sqtj39Y";
console.log(GOOGLE_MAP_KEY);
const SEARCH_KEYWORD = "Type your keyword here ...";
const SEARCH_BUTTON = "Search";

// const AnyReactComponent = ({ text }) => <Button color="primary">{SEARCH_BUTTON}</Button>;

class App extends Component {
  
  static defaultProps = {
    center: {lat: 32.4279, lng: 53.6880},
    zoom: 1,
  };

  render() {
    return (
      <div style={styles.container} className="App">
        <GoogleMapReact
          bootstrapURLKeys={{
            key:GOOGLE_MAP_KEY,
            language: 'en',
          }}
          style={styles.map}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
        </GoogleMapReact>
        <InputGroup style={styles.search}>
          <Input placeholder={SEARCH_KEYWORD} />
          <InputGroupAddon addonType="append"><Button color="primary">{SEARCH_BUTTON}</Button></InputGroupAddon>
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
    display: 'flex', 
    justifyContent: 'center',
  },
  search:{
    padding:10,
    width:500,
    height:100,
  },
  map:{
    width:1,
    height: 1,
  }
};

export default App;
