import axios from "axios";

const BASE_URL = "https://66c968578a477f50dc309087.mockapi.io/crud";

// https://jsonplaceholder.typicode.com/users
// https://66c968578a477f50dc309087.mockapi.io/crud
// Used JSON Placeholder for how to use API METHODS & how to pass id & data in API

export const apiRequest = (method, id = "", data = {}) => {
  return axios({
    method,
    url: `${BASE_URL}/${id}`,
    data,
  });
};
