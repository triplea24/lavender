import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
 } from 'reactstrap';
import GoogleMapReact from 'google-map-react';

const SEARCH_KEYWORD = "Type your keyword here ...";
const SEARCH_BUTTON = "Search";

// const AnyReactComponent = ({ text }) => <Button color="primary">{SEARCH_BUTTON}</Button>;

class App extends Component {
  
  static defaultProps = {
    center: {lat: 32.4279, lng: 53.6880},
    zoom: 1,
  };

  constructor(props) {
    super(props);
  }

  // <AnyReactComponent
  // lat={59.955413}
  // lng={30.337844}
  // text={'Kreyser Avrora'}/>
  render() {
    return (
      <div style={styles.container} className="App">
        <GoogleMapReact
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
