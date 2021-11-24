import _ from "lodash";
import request from "../utils/request";
const base_URL = "https://be-invitation-ridwan.herokuapp.com/invitation/";

const urls = {
  get_all_guest: "guest",
  submitContact: "contact/order",
};

const callAPI = (endpoint, method, headers = {}, params = {}, data = {}) => {
  const options = {
    baseURL: base_URL,
    url: endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data && response.data.data;
    return responseAPI;
  });
};

export const getAllGuest = () => {
  return callAPI(urls.get_all_guest, "get", {});
};

export const postContact = (value) => {
  callAPI(urls.submitContact, "post", {}, {}, value);
};
