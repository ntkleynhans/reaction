import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
import Username from './Username';

class App extends Component {
  render() {

    return(
      <div>
        <h2>Reaction Messenger</h2>
        <Username />
        { 
          (this.props.username.length > 0) ? (
          <div>
            <PublishMessage />
            <MessageBoard />
          </div>
          ) : (<div></div>)
        }
      </div>
    )
  }
}

export default connect(({ username: { username } }) => ({ username }), ({}))(App);
