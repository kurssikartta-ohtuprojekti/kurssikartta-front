import axios from 'axios'
import config from './../utils/config'
const baseUrl = `${config}/courses` 

const getAll = async () => {
  const request = axios.get(baseUrl)
  return await request.then(response => response.data)
}

const getById = async (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return await request.then(response => response.data)
}


export default { getAll, getById }