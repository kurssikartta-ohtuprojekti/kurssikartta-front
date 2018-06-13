// Pakollisen kurssin tyylittelyt

const CompCourseStyling = ({course, scale}) => {
    // console.log(course.studytrack)
    const algorithms = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        backgroundColor: '#ffb3b3',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: '#C0C0C0',
        fontWeight: 'bold',
        fontSize: 9,
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    }
    const dataSc = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        backgroundColor: '#bdf5bd',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: '#C0C0C0',
        fontWeight: 'bold',
        fontSize: 9,
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    }
    const systems = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        backgroundColor: '#ffffcc',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: '#C0C0C0',
        fontWeight: 'bold',
        fontSize: 9,
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    }
    const networking = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        backgroundColor: '#c4e3ed',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: '#C0C0C0',
        fontWeight: 'bold',
        fontSize: 9,
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    }

    const defaultStyle = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: '#C0C0C0',
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