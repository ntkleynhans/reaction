import React, { Component } from 'react';
import PubSub from '../pubsub';
import { newMessage } from '../actions/messages';

const pubsub = new PubSub();

class PublishMessage extends Component {
  state = { text: '' }

  updateText = event => this.setState({ text: event.target.value });

  publishMessage = () => {
    pubsub.publish(newMessage(this.state.text));
  }

  handleKeyPress = event => {
    if(event.key === 'Enter') {
      this.publishMessage();
    }
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            Got something to say?
          </div>
          <div className="card-body">
            <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Send a message" aria-label="Send a message" aria-describedby="button-addon2" onChange={this.updateText} onKeyPress={this.handleKeyPress} />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.publishMessage} >Publish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PublishMessage;
