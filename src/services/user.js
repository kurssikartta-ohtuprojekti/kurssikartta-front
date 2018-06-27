import axios from 'axios'
const baseUrl = 'https://kurssikartta-backend.herokuapp.com'
// const baseUrl = 'http://localhost:3001/register'


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