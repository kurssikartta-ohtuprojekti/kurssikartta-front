import axios from 'axios'
const baseUrl = 'http://kurssikartta-backend.herokuapp.com/courses'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}


export default { getAll }