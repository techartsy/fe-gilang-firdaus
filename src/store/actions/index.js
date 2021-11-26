import {
  POST_REGISTRATION,
  GET_ALL_GUEST,
  SET_GUESTS,
  SET_MESSAGES,
  SET_NEW_GUEST,
  SET_ERROR_POST,
  RESET_ERROR_POST,
} from "../constants/index";

export const getAllGuest = () => {
  return {
    type: GET_ALL_GUEST,
  };
};
export const setGuests = (guests) => {
  return {
    type: SET_GUESTS,
    guests,
  };
};
export const submitRegistration = (guestData, callback, errorNotif) => {
  return {
    type: POST_REGISTRATION,
    guestData,
  };
};
export const setMessages = (messages) => {
  console.log(messages, "action");
  return {
    type: SET_MESSAGES,
    messages,
  };
};
export const setNewGuest = (guest) => {
  return {
    type: SET_NEW_GUEST,
    guest,
  };
};
export const setErrorPost = () => {
  return {
    type: SET_ERROR_POST,
  };
};
export const resetErrorPost = () => {
  return {
    type: RESET_ERROR_POST,
  };
};
