import axios from 'axios'
const baseUrl = 'https://kurssikartta-backend.herokuapp.com/courses'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}


export default { getAll }