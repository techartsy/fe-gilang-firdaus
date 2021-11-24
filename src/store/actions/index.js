import {
  HELLO_WORLD,
  POST_CONTACT,
  GET_ALL_GUEST,
  SET_GUESTS,
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
export const requestHelloWorld = () => {
  return {
    type: HELLO_WORLD,
  };
};
export const submitContact = (value) => {
  return {
    type: POST_CONTACT,
    value,
  };
};
