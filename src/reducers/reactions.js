import { REACTION_EMOJIS } from '../actions/types';

const REACTION_TYPES = REACTION_EMOJIS.map(REACTION_EMOJI => REACTION_EMOJI.type);

const DEFAULT_REACTIONS = {
};

const reactionsReducer = ( state = DEFAULT_REACTIONS, action) => {
  if (REACTION_TYPES.includes(action.type)) {
    const { messageId } = action.item;

    const messageReactions = state[messageId];
    if(messageReactions) {
      return {
        ...state, [messageId] : [ ...messageReactions, action.item]
      }
    }
    return { ...state, [messageId]: [action.item]}
  }
  return state;
}

export default reactionsReducer;
