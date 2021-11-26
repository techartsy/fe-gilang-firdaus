import produce from "immer";
import {
  SET_GUESTS,
  SET_MESSAGES,
  SET_NEW_GUEST,
  SET_ERROR_POST,
  RESET_ERROR_POST,
} from "../constants/index";

export const initialState = {
  guests: [],
  messages: [],
  isError: false,
};

const invitationState = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_GUESTS:
        draft.guests = action.guests;
        break;
      case SET_MESSAGES:
        draft.messages = action.messages;
        break;
      case SET_NEW_GUEST:
        let newMessages = draft.messages;
        newMessages.unshift(action.guest);
        draft.messages = newMessages;
        break;
      case SET_ERROR_POST:
        draft.isError = true;
        break;
      case RESET_ERROR_POST:
        draft.isError = false;
        break;
      default:
        return state;
    }
  });

export default invitationState;
