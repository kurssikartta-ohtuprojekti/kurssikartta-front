// Valinnaisen kurssin tyylittely

const CourseStyling = ({course}) => {
    // console.log(course.studytrack)
    const algorithms = {
        backgroundColor: 'lightblue',
        width: '150px',
        height: '60px',
        fontSize: 9,

    }
    const dataSc = {
        backgroundColor: 'lightgreen',
        width: '150px',
        height: '60px',
        fontSize: 9,

    }
    const systems = {
        backgroundColor: 'yellow',
        width: '150px',
        height: '60px',
        fontSize: 9,

    }
    const networking = {
        backgroundColor: 'chocolate',
        width: '150px',
        height: '60px',
        fontSize: 9,

    }
    const defaultStyle = {
        width: '150px',
        height: '60px',
        fontSize: 9,
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