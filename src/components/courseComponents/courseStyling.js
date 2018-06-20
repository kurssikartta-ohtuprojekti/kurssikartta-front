// Valinnaisen kurssin tyylittely
import color from 'color'

const CourseStyling = ({ course, scale, hovered, prereqHighlight }) => {
    if (scale === undefined) {
        scale = 2
    }

    // Increase font size based on scale
    const fontSizing = () => {
        if (scale > 2) {
            return (4.5 * scale)
        }
        else {
            return 9
        }
    }
    // Background color based on studytrack or faculty
    // Lighten background color onHover
    const background = () => {
        if (course.studytrack[0] === 'ds') {
            if (!hovered) {
                return color('#bdf5bd')
            } else {
                return color('#bdf5bd').lighten(0.05)
            }
        }
        if (course.studytrack[0] === 'ns') {
            if (!hovered) {
                return color('#c4e3ed')
            } else {
                return color('#c4e3ed').lighten(0.05)
            }
        }
        if (course.studytrack[0] === 'ss') {
            if (!hovered) {
                return color('#ffffcc')
            } else {
                return color('#ffffcc').lighten(0.05)
            }
        }
        if (course.studytrack[0] === 'adm') {
            if (!hovered) {
                return color('#ffb3b3')
            } else {
                return color('#ffb3b3').lighten(0.05)
            }
        }
        if (course.studytrack[0] === undefined || course.studytrack[0] === null || course.studytrack[0] ==='') {
            if (!hovered) {
                return color('white')
            } else {
                return color('#f0f8ff')
            }
        }
        if (course.faculty === 'math') {
            if (!hovered) {
                return color('#f6d4bc')
            } else {
                return color('#f6d4bc').lighten(0.05)
            }
        }
    
        if (course.faculty === 'stats') {
            if (!hovered) {
                return color('#f6bcdd')
            } else {
                return color('#f6bcdd').lighten(0.05)
            }
        }        
    }

    // Render course as prerequirement
    // returns values for css boxShadow
    const prereq = () => {
        if (prereqHighlight === true) {
            return '2px 3px 3px black'
        }
        else {
            return 'none'
        }
    }
    // Darken borderColor onhover
    const border = (borderColor) => {
        const returnColor = color(borderColor)
        if (!hovered) {
            return returnColor
        } else {
            // console.log(returnColor.lighten(0.5).rgbNumber())
            return returnColor.darken(0.1)
        }
    }
    // Thicker borders for compulsory courses
    const compulsory = () => {
        if (course.compulsory) {
            return '4px'
        } else {
            return '1px'
        }
    }

    const courseStyle = {
        backgroundColor: background(),
        width: `${scale * 75}px`,
        height: `${scale * 30}px`,
        padding: 0,
        fontSize: fontSizing(),
        overflow: 'hidden',
        whiteSpace: 'normal',
        position: 'relative',
        zIndex: 1,
        boxShadow: prereq(),
        border: 'solid',
        borderWidth: compulsory(),
        borderColor: border('#C0C0C0'),
        borderRadius: '6px'
    }
    return courseStyle
}

export default CourseStyling