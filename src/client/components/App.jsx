import React, { Component } from 'react';
import './app.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import IPContainer from '../containers/IPContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: 'derp' };
  }

  render() {
    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Nav />
        <Main />
        <IPContainer />
        <Footer />
      </div>
    );
  }
}
