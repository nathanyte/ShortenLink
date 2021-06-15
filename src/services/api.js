import axios from 'axios';

// key 8138dbef46ff0ef2dc785654661abe95b8d8fff3
// baseURL https://api-ssl.bitly.com/v4/

export const key = '8138dbef46ff0ef2dc785654661abe95b8d8fff3';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers: {
    'content-type': 'application/json',
    'Authorization': `Bearer ${key}`,

  }
})

export default api;