import produce from "immer";
import { SET_GUESTS } from "../constants/index";

export const initialState = {
  guests: [],
};

const invitationState = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_GUESTS:
        draft.guests = action.guests;
        break;
      default:
        return state;
    }
  });

export default invitationState;
