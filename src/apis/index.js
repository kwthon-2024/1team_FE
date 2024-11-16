import axios from 'axios'

export const getTree = async (id) => {
  console.log('id', id)
  const response = await axios.get(`/tree/${id}`)
  console.log('response', response)
  return response
}
