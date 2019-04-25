import { REACTIONS_EMOJIS } from '../actions/types';

const REACTION_TYPES = REACTIONS_EMOJIS.map(REACTIONS_EMOJI => REACTIONS_EMOJI.type);

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
    return { ..state, [messageId]: [action.item]}
  }
  return state;
}

export defautl reactionsReducer;
