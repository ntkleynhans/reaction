import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublishMessage from './PublishMessage';

class App extends Component {
  render() {

    return(
      <div>
        <h2>Reaction Messenger</h2>
        <PublishMessage />
      </div>
    )
  }
}

export default connect()(App);
