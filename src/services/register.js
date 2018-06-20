import axios from 'axios'
const baseUrl = 'https://kurssikartta-backend.herokuapp.com/signup'
// const baseUrl = 'http://localhost:3001/login'

const register = async (credentials) => {
    const request = axios.put(`${baseUrl}`, credentials)
    return await request.then(response => response.data)
}

export default { register }