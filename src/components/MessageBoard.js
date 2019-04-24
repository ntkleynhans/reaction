import React from 'react';
import { connect } from 'react-redux';

const MessageBoard = ({ items, username }) => {
  return (
    <div>
    {
      items.map((item, index) => {
        return (
          <div key={item.id} style={{ padding: '10px' }}>
            <div className="card text-left" >
              <div className="card-body">
                <h5 className="card-title">{ username }</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ new Date(item.timestamp).toLocaleString()}</h6>
                <p className="card-text">{ item.text }</p>
              </div>
            </div>
          </div>
        )
      })
    }
    </div>
  )
}

export default connect(({ messages: { items }, username: { username } }) => ({ items, username }), ({}))(MessageBoard);

