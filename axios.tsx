// src/lib/axios.ts
import axios from 'axios';

const api = axios.create({
//   baseURL:'http://localhost:5040/api',
    baseURL: 'https://visit-wise-api.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors here for auth or logging
// api.interceptors.response.use(...)

export default api;
