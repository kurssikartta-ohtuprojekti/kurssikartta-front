import color from 'color'
// Compulsory course styling

const CompCourseStyling = ({course, scale, hovered, prereqHighlight}) => {
    if (scale === undefined) {
        scale = 2
    }

    // Used to scale font size based on map zoom
    const fontSizing = () => {
        if (scale > 2) {
            return (4.5 * scale)
        } 
        else {
            return 9
        }
    }
    const background = (bgColor) => {
        const returnColor = color(bgColor)
        // console.log(returnColor)
        if (!hovered) {
            return returnColor
        } else {
            // console.log(returnColor.lighten(0.5).rgbNumber())
            return returnColor.lighten(0.05)
        }
    }

    const border = (borderColor) => {
        const returnColor = color(borderColor)
        if (!hovered) {
            return returnColor
        } else {
            // console.log(returnColor.lighten(0.5).rgbNumber())
            return returnColor.darken(0.1)
        }
    }
    const prereq = () => {
        if (prereqHighlight === true) {
            return '2px 3px 3px black'
        }
        else {
            return 'none'
        }
    }
    // console.log(course.studytrack)
    const algorithms = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        padding: 0,
        backgroundColor: background('#ffb3b3'),
        border: 'solid',
        borderWidth: 4,
        borderRadius: 6,
        borderColor: border('#C0C0C0'),
        fontWeight: 'bold',
        fontSize: fontSizing(),
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        boxShadow: prereq(),
    }
    const dataSc = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        padding: 0,
        backgroundColor: background('#bdf5bd'),
        border: 'solid',
        borderWidth: 4,
        borderRadius: 6,
        borderColor: border('#C0C0C0'),
        fontWeight: 'bold',
        fontSize: fontSizing(),
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        boxShadow: prereq(),

    }
    const systems = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        padding: 0,
        backgroundColor: background('#ffffcc'),
        border: 'solid',
        borderWidth: 4,
        borderRadius: 6,
        borderColor: border('#C0C0C0'),
        fontWeight: 'bold',
        fontSize: fontSizing(),
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        boxShadow: prereq(),

    }
    const networking = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        padding: 0,
        backgroundColor: background('#c4e3ed'),
        border: 'solid',
        borderWidth: 4,
        borderRadius: 6,
        borderColor: border('#C0C0C0'),
        fontWeight: 'bold',
        fontSize: fontSizing(),
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        boxShadow: prereq(),

    }

    const defaultStyle = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        padding: 0,
        border: 'solid',
        borderWidth: 4,
        borderRadius: 6,
        borderColor: border('#C0C0C0'),
        fontWeight: 'bold',
        fontSize: fontSizing(),
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        boxShadow: prereq(),

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