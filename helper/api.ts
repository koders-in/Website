const axios = require("axios");

export const JobClient = axios.create({
  baseURL: "https://hasura.koders.in/api/rest/",
  headers:{
    'Content-type':'application/json'
  }
});
 