import { SET_USERNAME } from './types.js';

export const clientUsername = name => {
  return {
    type: SET_USERNAME,
    username: name
  }
};
