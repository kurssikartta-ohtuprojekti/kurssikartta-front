import axios from 'axios'
const baseUrl = 'http://localhost:3001/courses/info/'


const getCourseInfo = async (id) => {
    console.log('request uri', baseUrl.concat(id))
    return await axios.get(baseUrl.concat(id)).then(response => response.data)
}





export default { getCourseInfo }