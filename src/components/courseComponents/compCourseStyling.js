// Pakollisen kurssin tyylittelyt

const CompCourseStyling = ({course, scale}) => {
    const fontSizing = () => {
        if (scale > 2) {
            return (4.5 * scale)
        } 
        else {
            return 9
        }
    }   
    // console.log(course.studytrack)
    const algorithms = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        backgroundColor: '#ffb3b3',
        border: 'solid',
        borderWidth: 4,
        borderRadius: 6,
        borderColor: '#C0C0C0',
        fontWeight: 'bold',
        fontSize: fontSizing(),
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
        borderWidth: 4,
        borderRadius: 6,
        borderColor: '#C0C0C0',
        fontWeight: 'bold',
        fontSize: fontSizing(),
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
        borderWidth: 4,
        borderRadius: 6,
        borderColor: '#C0C0C0',
        fontWeight: 'bold',
        fontSize: fontSizing(),
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
        borderWidth: 4,
        borderRadius: 6,
        borderColor: '#C0C0C0',
        fontWeight: 'bold',
        fontSize: fontSizing(),
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    }

    const defaultStyle = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        border: 'solid',
        borderWidth: 4,
        borderRadius: 6,
        borderColor: '#C0C0C0',
        fontWeight: 'bold',
        fontSize: fontSizing(),
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