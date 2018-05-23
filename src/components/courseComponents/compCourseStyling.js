// Pakollisen kurssin tyylittelyt

const CompCourseStyling = ({course}) => {
    // console.log(course.studytrack)
    const algorithms = {
        width: '150px',
        height: '80px',
        backgroundColor: 'lightblue',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: 'Red',
        fontWeight: 'bold',
        fontSize: 9,

    }
    const dataSc = {
        width: '150px',
        height: '80px',
        backgroundColor: 'lightgreen',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: 'Red',
        fontWeight: 'bold',
        fontSize: 9,

    }
    const systems = {
        width: '150px',
        height: '60px',
        backgroundColor: 'yellow',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: 'Red',
        fontWeight: 'bold',
        fontSize: 9,

    }
    const networking = {
        width: '150px',
        height: '60px',
        backgroundColor: 'chocolate',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: 'Red',
        fontWeight: 'bold',
        fontSize: 9,

    }

    const defaultStyle = {
        width: '150px',
        height: '60px',
        border: 'solid',
        borderWidth: 5,
        borderRadius: 6,
        borderColor: 'Red',
        fontWeight: 'bold',
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

export default CompCourseStyling