import axios from 'axios'
import { filters } from '@/constants'

const baseUrl = import.meta.env.VITE_BASEURL

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  // baseURL: import.meta.env.DEV ? 'http://localhost:5173/' : import.meta.env.VITE_BASEURL,
  baseURL: baseUrl,
})

export const getTree = async (id) => {
  const response = await api.get(`/tree/${id}`)
  return response
}

export const postSignUp = async (requset) => {
  const response = await api.post('/auth/signUp', requset)

  return response
}

export const postEmailDuplication = async (request) => {
  const response = await api.post('/auth/emailDuplication', request)

  return response
}

export const postEmailVerification = async (request) => {
  const response = await api.post('/auth/emailVerification', request)

  return response
}

export const postLogin = async (request) => {
  const response = await api.post('/auth/login', request)

  return response
}

export const postMail = async (id, request) => {
  const response = await api.post(`/mail/${id}`, request)
  return response
}

export const getFriendMail = async (id, { page, size }) => {
  const response = await api.get(`/friendMail/${id}?page=${page}&size=${size}`)
  return response
}

export const getMyMail = async (id, filter, { page, size }) => {
  const response = await api.get(
    `/myMail/${id}?filter=${filters[filter]}?page=${page}&size=${size}`,
  )
  return response
}

export const getSearch = async (q) => {
  const response = await api.get(`/search?keyword=${q}`)
  return response.data
}

export const getKWTreeMail = async () => {
  const response = await api.get('/kwTree/mailBoxList')
  console.log(response)
  return response.data
}
