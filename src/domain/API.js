import _ from "lodash";
import request from "../utils/request";
const base_URL = "https://be-compro.herokuapp.com/app/v1/techartsy/";

const urls = {
  get_all_gallery: "galleries",
  submitContact: "contact/order",
};

const callAPI = (endpoint, method, headers = {}, params = {}, data = {}) => {
  const access_token = localStorage.getItem("access_token");
  const defaultHeaders = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsImlhdCI6MTYzNTM1MjM2Nn0.LXAD2_3yTUYRyMbdBGSMuQE8V1WZ5L5mcd8sCOZO6UU`,
  };

  _.extend(headers, defaultHeaders);
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

export const getAllGallery = () => {
  callAPI(urls.get_all_gallery, "get", {});
};

export const postContact = (value) => {
  callAPI(urls.submitContact, "post", {}, {}, value);
};
