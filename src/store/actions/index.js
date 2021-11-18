import {
  HELLO_WORLD,
  RECEIVE_HELLO_WORLD,
  POST_CONTACT,
} from "../constants/index";

export const requestHelloWorld = () => {
  return {
    type: HELLO_WORLD,
  };
};
export const receiveHelloWorld = (text) => {
  return {
    type: RECEIVE_HELLO_WORLD,
    text,
  };
};
export const submitContact = (value) => {
  return {
    type: POST_CONTACT,
    value,
  };
};
