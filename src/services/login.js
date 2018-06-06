import axios from 'axios'
const baseUrl = 'https://kurssikartta-backend.herokuapp.com/login'

const login = async (credentials) => {
    console.log(credentials)
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }