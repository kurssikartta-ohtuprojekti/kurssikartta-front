import axios from 'axios'
const baseUrl = 'https://kurssikartta-backend.herokuapp.com/matrix'

const getAll = async () => {
    const request = axios.get(baseUrl)
    return await request.then(response => response.data)
}

const getById = async (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
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


export default { getAll, getById, updateById, updateWithoutId, deleteById }