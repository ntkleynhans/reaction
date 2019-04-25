import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clientUsername } from '../actions/username';

class Username extends Component {
  state = { username: '' }

  updateText = event => this.setState({ username: event.target.value });

  setUsername = () => {
    this.props.clientUsername(this.state.username)();
  }

  handleKeyPress = event => {
    if(event.key === 'Enter') {
      this.setUsername();
    }
  }

  render() {
    return(
      <div>
        <div className="card rounded">
          <div className="card-header bg-warning">
            Enter username to continue
          </div>
          <div className="card-body">
            <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Client Username" aria-label="Client Username" aria-describedby="button-addon2" onChange={this.updateText} onKeyPress={this.handleKeyPress} />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.setUsername} >Go!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clientUsername: username => () => dispatch(clientUsername(username))
  };
}

export default connect(({})=>({}), mapDispatchToProps)(Username);
