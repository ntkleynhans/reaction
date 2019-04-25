import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PubSubContext } from '../pubsub';
import { newMessage } from '../actions/messages';

class PublishMessage extends Component {
  state = { text: '' }

  updateText = event => this.setState({ text: event.target.value });

  publishMessage = () => {
    const { text } = this.state;
    const { username } = this.props;

    this.context.pubsub.publish(newMessage({ text, username }));
    const input = document.getElementById('username_input');
    input.value = '';
  }

  handleKeyPress = event => {
    if(event.key === 'Enter') {
      this.publishMessage();
    }
  }

  render() {
    return (
      <div>
        <div className="input-group mb-3" style={{ padding: '10px' }}>
          <input id='username_input' type="text" className="form-control" placeholder="Send a message" aria-label="Send a message" aria-describedby="button-addon2" onChange={this.updateText} onKeyPress={this.handleKeyPress} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.publishMessage} >Publish</button>
          </div>
        </div>
      </div>
    )
  }

  static contextType = PubSubContext;
}

export default connect(({ username: { username } }) => ({ username }))(PublishMessage);
