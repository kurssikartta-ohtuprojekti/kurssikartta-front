import axios from 'axios'
import config from './../utils/config'
const baseUrl = `${config}` 


let token = null

const setToken = (newToken) => {
    token = newToken
}

const completedCourses = async (completedCourses) => {
    const config = {
        headers: { 'authorization': token }
    }
    const resCourses = {courses: completedCourses}
    const request = axios.post(`${baseUrl}/my_courses`, resCourses, config)
    return await request.then(response => response.data)
}

export default {setToken, completedCourses }