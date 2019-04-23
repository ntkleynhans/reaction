import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config';



export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

class PubSub {
  constructor() {
    this.pubnub = new PubNub(pubnubConfig);    
    this.pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });
  }

  addListener = listenerConfig => {
    this.pubnub.addListener(listenerConfig);
  }

  publish = message => {
    this.pubnub.publish({ message: message, channel: MESSAGE_CHANNEL });
  }
}

export default PubSub;
