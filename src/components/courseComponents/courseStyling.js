// Valinnaisen kurssin tyylittely
import color from 'color'

const CourseStyling = ({ course, scale, hovered }) => {
    if (scale === undefined) {
        scale = 2
    }
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
     // console.log(course.studytrack)
    const algorithms = {
        backgroundColor: background('#ffb3b3'),
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        padding: 0,
        fontSize: fontSizing(),
        overflow: 'hidden',
        whiteSpace: 'normal',
        position: 'relative',
        zIndex: 1,

    }
    const dataSc = {
        backgroundColor: background('#bdf5bd'),
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        padding: 0,
        fontSize: fontSizing(),
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,

    }
    const systems = {
        backgroundColor: background('#ffffcc'),
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        padding: 0,
        fontSize: fontSizing(),
        whiteSpace: 'normal',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    }
    const networking = {
        backgroundColor: background('#c4e3ed'),
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        padding: 0,
        fontSize: fontSizing(),
        overflow: 'hidden',
        whiteSpace: 'normal',
        position: 'relative',
        zIndex: 1,

    }
    const math = {
        backgroundColor: background('#f6d4bc'),
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        padding: 0,
        fontSize: fontSizing(),
        overflow: 'hidden',
        whiteSpace: 'normal',
        position: 'relative',
        zIndex: 1,

    }

    const stats = {
        backgroundColor: background('#f6bcdd'),
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        padding: 0,
        fontSize: fontSizing(),
        overflow: 'hidden',
        whiteSpace: 'normal',
        position: 'relative',
        zIndex: 1,

    }

    const defaultStyle = {
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        padding: 0,
        ':hover': {backgroundColor: 'red'},
        fontSize: fontSizing(),
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
    if (course.faculty === 'math') {
        return (
            math
        )
    }

    if (course.faculty === 'stats') {
        return (
            stats
        )
    }
    return (
        defaultStyle
    )
}
export default CourseStyling