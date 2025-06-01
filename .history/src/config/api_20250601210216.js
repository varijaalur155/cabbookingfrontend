"use client"

import axios from 'axios';
import { TextEncoder, TextDecoder } from 'text-encoding-utf-8';


export const API_BASE_URL = 'https://cabbookingbackend.onrender.com';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const api = axios.create({
  baseURL: API_BASE_URL,
});
///const jwt=localStorage.getItem("jwt");
// const token = localStorage.getItem('jwt');

//api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export function setAuthToken() {
  if (typeof window !== "undefined") {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    } else {
      delete api.defaults.headers.common['Authorization'];
    }
  }
}
export { api };
