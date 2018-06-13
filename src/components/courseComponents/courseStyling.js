// Valinnaisen kurssin tyylittely

const CourseStyling = ({course, scale}) => {
    // console.log(course.studytrack)
    const algorithms = {
        backgroundColor: '#ffb3b3',
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        fontSize: 9,
        overflow: 'hidden',
        whiteSpace: 'normal',
        position: 'relative',
        zIndex: 1,

    }
    const dataSc = {
        backgroundColor: '#bdf5bd',
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        fontSize: 9,
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,

    }
    const systems = {
        backgroundColor: '#ffffcc',
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        fontSize: 9,
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative', 
        zIndex: 1,
    }
    const networking = {
        backgroundColor: '#c4e3ed',
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        fontSize: 9,
        overflow: 'hidden',
        whiteSpace: 'normal',
        position: 'relative',
        zIndex: 1,

    }
    const math = {
        backgroundColor: '#f6d4bc',
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        fontSize: 9,
        overflow: 'hidden',
        whiteSpace: 'normal',
        position: 'relative',
        zIndex: 1,
      
    }
    const defaultStyle = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        fontSize: 9,
        overflow: 'hidden',
        whiteSpace: 'normal',
        position: 'relative',
        zIndex: 1,
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