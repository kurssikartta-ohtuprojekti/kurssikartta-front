import axios from 'axios'
import config from './../utils/config'
const baseUrl = `${config}/register`

const register = async (credentials) => {
    const request = axios.post(`${baseUrl}`, credentials)
    return await request.then(response => response.data)
}

const deleteRegistration = async (credentials) => {
    const response = await axios.post(`${baseUrl}/delete`, credentials)
    return response.data
}

// const deleteById = async (id) => {
//     const config = {
//       headers: { 'authorization': token }
//     }
//     const response = await axios.delete(`${baseUrl}/${id}`, config)
//     return response.data
// }


export default { register, deleteRegistration }