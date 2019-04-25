import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
import Username from './Username';
import sound from '../assets/open-ended.mp3';

class App extends Component {
  render() {

    return(
      <div>
        <audio id='audioPlayer'><source src={sound} type="audio/mpeg"></source></audio>
        <h2>Reaction Messenger</h2>
        <Username />
        { 
          (this.props.username.length > 0) ? (
          <div>
            <MessageBoard />
            <PublishMessage />
          </div>
          ) : (<div></div>)
        }
      </div>
    )
  }
}

export default connect(({ username: { username } }) => ({ username }), ({}))(App);
