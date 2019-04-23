import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import appReducer from './reducers';
import PubSub from './pubsub';
import './index.css';

const store = createStore(appReducer);

store.subscribe(() => console.log('Store -->', store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
  message: messageObject => {
    const { message, channel } = messageObject;
    console.log('Message Received:', message, ' from channel:', channel);
    store.dispatch(message);
  }
});

setTimeout(() => {
  pubsub.publish({ type: 'foo', value: 'bar' });
}, 1000)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
