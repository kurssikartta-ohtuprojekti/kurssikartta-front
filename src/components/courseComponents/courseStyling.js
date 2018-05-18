
const CourseStyling = ({course}) => {
    // console.log(course.studytrack)
    const algorithms = {
        backgroundColor: 'lightblue'
    }
    const dataSc = {
        backgroundColor: 'red'
    }
    const systems = {
        backgroundColor: 'yellow'
    }
    const networking = {
        backgroundColor: 'bisque'
    }
    const defaultStyle = {
        
    }
    if (course.studytrack[0] === 'ds') {
        return (
            dataSc
        )
    }
    if (course.studytrack[0] === 'ns') {
        return (
            networking
        )
    }
    if (course.studytrack[0] === 'ss') {
        return (
            systems
        )
    }
    if (course.studytrack[0] === 'adm') {
        return (
            algorithms
        )
    }
    return (
        defaultStyle
    )
}
export default CourseStyling