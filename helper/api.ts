const axios = require("axios");

export const axiosClient = axios.create({
  baseURL: "https://hasura.koders.in/api/rest/",
  headers:{
    'Content-type':'application/json',
    'x-hasura-admin-secret': "api-key"
  }
});
 