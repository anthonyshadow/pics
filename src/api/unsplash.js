import axios from "axios";

require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;

 export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${API_KEY}`
  } 
});