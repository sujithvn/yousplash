import axios from 'axios';

const KEY = "INSERT-YOUR-UNSPLASH-KEY-HERE";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
    `Client-ID ${KEY}`
  }
});