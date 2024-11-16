import axios from 'axios'
import { filters } from '@/constants'

const api = axios.create({
  baseURL: 'http://localhost:5173/',
})

export const getTree = async (id) => {
  const response = await axios.get(`/tree/${id}`)
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

export const getFriendMail = async (id) => {
  const response = await api.get(`/friendMail/${id}`)
  return response
}

export const getMyMail = async (id, filter) => {
  const response = await api.get(`/myMail/${id}?filter=${filters[filter]}`)
  return response
}
