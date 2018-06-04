import axios from 'axios'
const baseUrl = 'https://kurssikartta-backend.herokuapp.com/matrices'

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.then(response => response.data)
}

const getById = async (id) => {
  const request = await axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const updateById = async (id, newObject) => {
    const request = await axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const updateWithoutId = async (newMatrice) => {
  
    const request = await axios.put(`${baseUrl}/${newMatrice._id}`, newMatrice)
    return request.then(response => response.data)
}

const deleteById = async (id) => {
    // const config = {
    //   headers: { 'Authorization': token }
    // }
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
  }


export default { getAll, getById }