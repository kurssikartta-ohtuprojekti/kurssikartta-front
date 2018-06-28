import axios from 'axios'
// const baseUrl = 'https://kurssikartta-backend.herokuapp.com/login'
const baseUrl = 'http://localhost:3001/login'


const login = async (credentials) => {
    const request = axios.post(baseUrl, credentials)
    return await request.then(response => response.data)
}

export default { login }