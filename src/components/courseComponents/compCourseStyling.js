// Pakollisen kurssin tyylittelyt

const CompCourseStyling = ({course}) => {
    // console.log(course.studytrack)
    const algorithms = {
        width: '150px',
        height: '60px',
        backgroundColor: '#ffb3b3',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: 'black',
        fontWeight: 'bold',
        fontSize: 9,
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    }
    const dataSc = {
        width: '150px',
        height: '60px',
        backgroundColor: '#bdf5bd',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: 'black',
        fontWeight: 'bold',
        fontSize: 9,
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    }
    const systems = {
        width: '150px',
        height: '60px',
        backgroundColor: '#ffffcc',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: 'black',
        fontWeight: 'bold',
        fontSize: 9,
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    }
    const networking = {
        width: '150px',
        height: '60px',
        backgroundColor: '#c4e3ed',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: 'black',
        fontWeight: 'bold',
        fontSize: 9,
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    }

    const defaultStyle = {
        width: '150px',
        height: '60px',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: 'black',
        fontWeight: 'bold',
        fontSize: 9,
        whiteSpace: 'normal',
        overflow: 'hidden',
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
    return (
        defaultStyle
    )
}

export default CompCourseStyling