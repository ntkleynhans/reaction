import React from 'react';
import { connect } from 'react-redux';
import CreateReaction from './CreateReaction';

const MessageReactions = ({ messageReactions }) => {
  if(!messageReactions) return null;

  return (
    messageReactions.map((reaction, index) => {
      const { id, emoji, username } = reaction;
      return (
        <span key={id}>
        <em>{username}</em>:{' '}{emoji}
        {index !== messageReactions.length-1 ? ', ' : null}
        </span>
      )
    })
  )
}

const MessageBoard = ({ items, reactions }) => {
  return (
    <div>
    {
      items.map((item, index) => {
        return (
          <div key={item.id} style={{ padding: '10px' }}>
            <div className="card text-left" >
              <div className="card-body">
                <h5 className="card-title bg-danger">{ item.username }</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ new Date(item.timestamp).toLocaleString()}</h6>
                <p className="card-text">{ item.text }</p>
              </div>
            </div>
            <CreateReaction messageId={item.id} />
            <MessageReactions messageReactions={reactions[item.id]} />
          </div>
        )
      })
    }
    </div>
  )
}

export default connect( ({ messages: { items }, reactions }) => ({ items, reactions }) ) (MessageBoard);
