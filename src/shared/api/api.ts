import axios from 'axios'

import { AUTH_USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

export const $api = axios.create({
  baseURL: process.env.API_URL
})

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(AUTH_USER_LOCALSTORAGE_KEY) ?? ''
  }

  return config
})
