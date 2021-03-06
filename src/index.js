import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import appReducer from './reducers';
import PubSub, { PubSubContext } from './pubsub';
import { newMessage } from './actions/messages';
import './index.css';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log('Store -->', store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
  message: messageObject => {
    const { message, channel } = messageObject;
    console.log('Message Received:', message, ' from channel:', channel);
    let audio = document.getElementById('audioPlayer');
    audio.play();
    store.dispatch(message);
  }
});

//setTimeout(() => {
//  pubsub.publish(newMessage('Hello World!'));
//}, 1000);

ReactDOM.render(
  <Provider store={store}>
  <PubSubContext.Provider value={{ pubsub }}>
    <App />
  </PubSubContext.Provider>
  </Provider>,
  document.getElementById('root')
);
