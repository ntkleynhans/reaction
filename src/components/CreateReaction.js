import React, { Component } from 'react';
import { REACTION_EMOJIS } from '../actions/types'

class CreateReaction extends Component {

  render() {
    return (
      <div>
      {
        REACTION_EMOJIS.map(REACTION_EMOJI => {
          const { type, emoji } = REACTION_EMOJI;
          return (<span 
              style={{ margin: 5, cursor: 'pointer '}}
              key={type}>{emoji}</span>)
        })
      }
      </div>
    )
  }
}

export default CreateReaction;
