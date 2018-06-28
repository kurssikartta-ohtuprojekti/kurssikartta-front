import axios from 'axios'
import config from './../utils/config'
const baseUrl = `${config}/register`

const register = async (credentials) => {
    const request = axios.post(`${baseUrl}`, credentials)
    return await request.then(response => response.data)
}

export default { register }