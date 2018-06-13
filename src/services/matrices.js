import axios from 'axios'
const baseUrl = 'http://localhost:3001/matrix'

let token = null

const setToken = (newToken) => {
    token = newToken
}

const getAll = async () => {
    const request = axios.get(baseUrl)
    return await request.then(response => response.data)
}

const getById = async (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return await request.then(response => response.data)
}

const postNewMatrice = async (newMatrice) => {
    const config = {
        headers: { 'authorization': token }
    }
    const request = axios.post(`${baseUrl}/${newMatrice.id}`, newMatrice, config)
    return await request.then(response => response.data)
}

const updateById = async (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return await request.then(response => response.data)
}

const updateWithoutId = async (newMatrice) => {
  
    const request = axios.put(`${baseUrl}/${newMatrice._id}`, newMatrice)
    return await request.then(response => response.data)
}

const deleteById = async (id) => {
    // const config = {
    //   headers: { 'Authorization': token }
    // }
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
}


export default {setToken, getAll, getById, updateById, updateWithoutId, deleteById, postNewMatrice}