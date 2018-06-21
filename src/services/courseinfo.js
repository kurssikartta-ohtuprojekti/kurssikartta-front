import axios from 'axios'
const baseUrl = 'https://kurssikartta-backend.herokuapp.com/courses/info/'

// Weboodin API 
const getCourseInfo = async (id) => {
    // console.log('request uri', baseUrl.concat(id))
    return await axios.get(baseUrl.concat(id)).then(response => response.data)
}





export default { getCourseInfo }