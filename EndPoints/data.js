export const BASE_URL = 'https://reqres.in/api';

export const ENDPOINTS = {
  CREATE_USER: `${BASE_URL}/users`,
   GET_USER: function(id) {  
    return `${BASE_URL}/users/${id}`;
  }
};
