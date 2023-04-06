import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json', //This header specifies the format of the data that is being sent to the server. Common values for this header include "application/json" for JSON data and "application/x-www-form-urlencoded" for form data.
    Accept: 'application/json', //This header specifies the format that the client expects the response to be in. Common values for this header include "application/json" and "text/html".
  },
})
