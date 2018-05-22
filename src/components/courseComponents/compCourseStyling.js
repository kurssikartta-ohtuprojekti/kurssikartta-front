// Pakollisen kurssin tyylittelyt

const CompCourseStyling = ({course}) => {
    // console.log(course.studytrack)
    const algorithms = {
        backgroundColor: 'lightblue',
        border: 'solid',
        borderWidth: 3,
        borderRadius: 6,
        borderColor: 'Red',
        fontWeight: 'bold',
    }
    const dataSc = {
        backgroundColor: 'red',
        border: 'solid',
        borderWidth: 3,
        borderRadius: 6,
        borderColor: 'Red',
        fontWeight: 'bold'
    }
    const systems = {
        backgroundColor: 'yellow',
        border: 'solid',
        borderWidth: 3,
        borderRadius: 6,
        borderColor: 'Red',
        fontWeight: 'bold',
    }
    const networking = {
        backgroundColor: 'bisque',
        border: 'solid',
        borderWidth: 3,
        borderRadius: 6,
        borderColor: 'Red',
        fontWeight: 'bold'
    }

    const defaultStyle = {
        // maxWidth: '200',
        border: 'solid',
        borderWidth: 3,
        borderRadius: 6,
        borderColor: 'Red',
        fontWeight: 'bold'
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