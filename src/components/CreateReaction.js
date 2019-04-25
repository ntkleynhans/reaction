import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REACTION_EMOJIS } from '../actions/types'
import { PubSubContext } from '../pubsub';
import { createReaction } from '../actions/reactions';

class CreateReaction extends Component {

  publishReaction = ({ type, emoji }) => () => {
    const { username, messageId } = this.props;
    this.context.pubsub.publish(createReaction({ type, emoji, username, messageId }))
  }

  render() {
    return (
      <div>
      {
        REACTION_EMOJIS.map(REACTION_EMOJI => {
          const { type, emoji } = REACTION_EMOJI;
          return (<span 
              style={{ margin: 5, cursor: 'pointer '}}
              key={type}
              onClick={this.publishReaction({ type, emoji })}>{emoji}</span>)
        })
      }
      </div>
    )
  }

  static contextType = PubSubContext;
}

export default connect(({ username: { username } }) => ({ username }))(CreateReaction);
