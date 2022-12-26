const axios = require("axios");

export const JobClient = axios.create({
  baseURL: "https://161.97.112.22:9090/api/rest/",
});
