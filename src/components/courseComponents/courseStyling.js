// Valinnaisen kurssin tyylittely

const CourseStyling = ({course}) => {
    // console.log(course.studytrack)
    const algorithms = {
        backgroundColor: 'lightblue'
    }
    const dataSc = {
        backgroundColor: 'lightgreen'
    }
    const systems = {
        backgroundColor: 'yellow'
    }
    const networking = {
        backgroundColor: 'chocolate'
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