// Valinnaisen kurssin tyylittely

const CourseStyling = ({course}) => {
    // console.log(course.studytrack)
    const algorithms = {
        backgroundColor: '#ffb3b3',
        width: '150px',
        height: '60px',
        fontSize: 9,
        overflow: 'hidden'

    }
    const dataSc = {
        backgroundColor: '#bdf5bd',
        width: '150px',
        height: '60px',
        fontSize: 9,
        overflow: 'hidden'


    }
    const systems = {
        backgroundColor: '#ffffcc',
        width: '150px',
        height: '60px',
        fontSize: 9,
        overflow: 'hidden'

    }
    const networking = {
        backgroundColor: '#c4e3ed',
        width: '150px',
        height: '60px',
        fontSize: 9,
        overflow: 'hidden'

    }
    const math = {
        backgroundColor: '#ffb3ff',
        width: '150px',
        height: '60px',
        fontSize: 9,
        overflow: 'hidden'
        
    }
    const defaultStyle = {
        width: '150px',
        height: '60px',
        fontSize: 9,
        overflow: 'hidden'

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
    if (course.studytrack[0] === 'math') {
        return (
            math
        )
    }
    return (
        defaultStyle
    )
}
export default CourseStyling