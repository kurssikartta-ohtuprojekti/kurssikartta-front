// Tools for setting up and modifying matrices

// Add a new course to the matrice with given coordinates
const addNewCourse = (code, matrice, x, y) => {
    if (x === undefined) {
        x = 0
    }
    if (y === undefined) {
        y = 0
    }
    if (x >= matrice.lenght || x < 0 || y >= matrice.length || y < 0) {
        return {error: 'Given coordinates out of matrice'}
    }
    if (matrice[y][x] === '.') {
        matrice[y][x] = code;
    } else {
        return {error: 'Matrix node already taken by ' + matrice[y][x]}
    }
    return matrice;
}

const removeCourse = (code, matrice) => {
    const coords = matrixFindCourseByCode(code, matrice)
    if (coords === null) {
        return {error: 'Course not found in matrice'}
    } else {
        matrice[coords.y][coords.x] = '.'
        return matrice // returns the matrice after removal    
    }
    
}

// Move course in matrice by given x and y coordinates
const moveCourseByXAndY = (code, matrice, x, y) => {
    const oldCoords = matrixFindCourseByCode(code, matrice)
    if (oldCoords === undefined) {
        return {error: 'Invalid course code or matrice'}
    }
    if (oldCoords === null) {
        return {error: 'Course not found in matrice'}
    }
    if (oldCoords.x + x  >= matrice.length || oldCoords.y + y >= matrice.length || oldCoords.x + x < 0 || oldCoords.y + y < 0) {
        return {error: 'new coordinates out of matrice'}
    }
    if (matrice[oldCoords.y + y][oldCoords.x + x] === '.') {
        matrice[oldCoords.y][oldCoords.x] = '.';
        matrice[oldCoords.y + y][oldCoords.x + x] = code;
    }   else {
        return {error: 'Matrix node already taken by ' + matrice[oldCoords.y + y][oldCoords.x + x]}
    }
    return matrice;
}

const moveCourseNorth = (code, matrice) => {
    return moveCourseByXAndY(code, matrice, 0, -1)
}
const moveCourseSouth = (code, matrice) => {
    return moveCourseByXAndY(code, matrice, 0, 1)
}
const moveCourseWest = (code, matrice) => {
    return moveCourseByXAndY(code, matrice, -1, 0)
}
const moveCourseEast = (code, matrice) => {
    return moveCourseByXAndY(code, matrice, 1, 0)
}
const moveCourseNorthWest = (code, matrice) => {
    return moveCourseByXAndY(code, matrice, -1, -1)
}
const moveCourseNorthEast = (code, matrice) => {
    return moveCourseByXAndY(code, matrice, 1, -1)
}
const moveCourseSouthWest = (code, matrice) => {
    return moveCourseByXAndY(code, matrice, -1, 1)
}
const moveCourseSouthEast = (code, matrice) => {
    return moveCourseByXAndY(code, matrice, 1, 1)
}



// Move course in matrice to given new absolute x and y coordinates.
const moveCourseToNewCoordinates = (code, matrice, y, x) => {
    if (x === undefined) {
        x = 0
    }
    if (y === undefined) {
        y = 0
    }
    if (x >= matrice.length || x < 0 || y >= matrice.length || y < 0) {
        return {error: 'Given coordinates out of matrice'}
    }
    const oldCoords = matrixFindCourseByCode(code, matrice)
    if (oldCoords === undefined) {
        return {error: 'Invalid course code or matrice'}
    }
    if (oldCoords === null) {
        return {error: 'Course not found in matrice'}
    }
    if (matrice[y][x] === '.') {
        matrice[oldCoords.y][oldCoords.x] = '.';
        matrice[y][x] = code;
    } else {
        return {error: 'Matrix node already taken by ' + matrice[y][x]}
    }
    return matrice;
}
// Takes a course code and a matrice and searches the matrice for the course.
// Returns a JSX object that contains the course code, and coordinates of the course in the matrice.
const matrixFindCourseByCode = (code, matrice) => {
    if (matrice === undefined || matrice === null) {
        return undefined
    }
    if (code === undefined) {
        return undefined
    }
    for (let y = 0; y < matrice.length; y++) {
        for (let x = 0; x < matrice.length; x++) {
            if (matrice[y][x] === code) {
                return {code, x, y}
            }
        }
    }
    return null
}
// Create a JSX inline css gridTemplateArea string of a course matrice
const cssGridStringify = (sideLength, matrice) => {
    // console.log(matrice)
    // console.log(sideLength)
    if (matrice === undefined) {
        matrice = defaultMatrix()
    }
    if (sideLength === undefined) {
        sideLength = matrice.length
    }
    let gridString = '';
    for (let i = 0; i < sideLength; i++) {
        gridString += "'"
        for (let j = 0; j < sideLength; j++) {
            
            gridString += matrice[i][j]
            gridString += ' '
        }
        gridString += "'"
        gridString += '\n'
    
    }
    return gridString
}
// Return all courses in matrice by course code.
const mappedCourses = (matrice) => {
    if (matrice === undefined) {
        return []
    }
    // console.log(matrice)
    const mapped = []
    for (let i = 0; i < matrice.length; i++) {
        for (let j = 0; j < matrice.length; j++) {
            if (matrice[i][j] !== '.') {
                mapped.push(matrice[i][j])
            }
        }
    }
    return mapped
}
// Return all unmapped courses from list of mapped course codes
const unmappedCourses = (courses, mappedCodes) => {
    const list = []
    for (let i = 0; i < courses.length; i++) {
        if (!mappedCodes.includes(courses[i].code)) {
            list.push(courses[i])
        }
    }
    return list
}

// Returns a list of courses with unmapped courses removed
const removeUnmappedCourses = (matrice, courses) => {
    if (courses === null) {
        return null
    }
    const mapped = mappedCourses(matrice)
    const unmapped = unmappedCourses(courses, mapped)
    const returnList = []

    for (let i = 0; i < courses.length; i++) {
        if (!unmapped.includes(courses[i])) {
            returnList.push(courses[i])
        }
    }
    return returnList
}

// Return all empty node coords, for admin map
const emptyNodeCoordinatesAsList = (matrice) => {
    if (matrice === undefined) {
        return {error: 'Matrice undefined'}
    }
    const side = matrice.length
    const list = []

    for (let i = 0; i < side; i++) {
        for (let j = 0; j < side; j++) {
            if (matrice[i][j] === '.') {
                list.push(i + ', ' + j)
            }
        } 
    }
    return list
}

// Returns Default Matrice
const defaultMatrix = () => {
    const matrix = [];
        for(let i=0; i < 38; i++) {
            matrix[i] = [];
            for(let j=0; j < 38; j++) {
                matrix[i][j] = '.';
            }
        }
    matrix[6][5] = 'CSM14106'
    matrix[8][7] = 'CSM14103'
    matrix[10][7] = 'CSM14104'
    matrix[15][7] = 'CSM13402'
    matrix[2][9] = 'CSM14205'
    matrix[9][9] = 'CSM14105'
    matrix[11][9] = 'CSM14102'
    matrix[15][9] = 'CSM13401'
    matrix[4][10] = 'CSM14204'
    matrix[22][10] = 'CSM13104'
    matrix[28][10] = 'CSM13302'
    matrix[6][11] = 'CSM14203'
    matrix[12][11] = 'CSM14101'
    matrix[26][11] = 'CSM13301'
    matrix[23][12] = 'CSM13103'
    matrix[21][12] = 'CSM13102'
    matrix[18][13] = 'CSM13501'
    matrix[11][13] = 'TKT21002'
    matrix[7][14] = 'TKT21005'
    matrix[16][14] = 'TKT21008'
    matrix[22][14] = 'CSM13001'
    matrix[26][14] = 'CSM13202'
    matrix[13][15] = 'TKT21001'
    matrix[15][16] = 'TKT20011'
    matrix[19][16] = 'TKT21004'
    matrix[21][16] = 'TKT20003'
    matrix[5][17] = 'CSM14201'
    matrix[25][17] = 'TKT20009'
    matrix[27][17] = 'CSM13204'
    matrix[8][18] = 'TKT21015'
    matrix[16][18] = 'TKT10002'
    matrix[20][18] = 'TKT10004'
    matrix[23][18] = 'TKT20004'
    matrix[6][19] = 'TKT20007'
    matrix[10][19] = 'TKT20006'
    matrix[14][19] = 'TKT20002'
    matrix[18][19] = 'TKT10001'
    matrix[25][19] = 'CSM13101'
    matrix[23][20] = 'TKT20012'
    matrix[16][20] = 'TKT10003'
    matrix[20][20] = 'TKT10005'
    matrix[13][21] = 'TKT21013'
    matrix[18][22] = 'TKT20001'
    matrix[24][23] = 'TKT20005'
    matrix[16][23] = 'TKT20010'
    matrix[10][23] = 'TKT21007'
    matrix[8][23] = 'TKT21009'
    matrix[26][24] = 'TKT21019'
    matrix[7][25] = 'TKT21010'
    matrix[12][25] = 'TKT21003'
    matrix[22][25] = 'TKT20008'
    matrix[15][26] = 'TKT21014'
    matrix[26][26] = 'DATA11001'
    matrix[11][27] = 'TKT21016'
    matrix[23][27] = 'TKT21018'
    matrix[14][29] = 'TKT21012'
    matrix[18][29] = 'CSM12101'
    matrix[28][29] = 'DATA11002'
    matrix[26][30] = 'DATA14002'
    matrix[30][30] = 'DATA12001'
    matrix[14][31] = 'TKT21017'
    matrix[17][31] = 'CSM12104'
    matrix[20][31] = 'CSM12103'
    matrix[26][32] = 'DATA15003'
    matrix[12][33] = 'LSI31003'
    matrix[14][33] = 'CSM12108'
    matrix[17][33] = 'CSM12105'

    return matrix;
}

// Returns an empty matrice of size (sideLength x sideLength) or (38x38)
const emptyMatrix = (sideLength) => {
    if (sideLength === undefined) {
        sideLength = 38
    }
    const matrix = [];
        for(let i=0; i < sideLength; i++) {
            matrix[i] = [];
            for(let j=0; j < sideLength; j++) {
                matrix[i][j] = '.';
            }
        }
        //matrix[36][36] = 'TKT10001'
    return matrix
}



export {defaultMatrix,
        emptyMatrix,
        cssGridStringify,
        matrixFindCourseByCode,
        moveCourseToNewCoordinates,
        moveCourseByXAndY,
        moveCourseEast,
        moveCourseWest,
        moveCourseSouth,
        moveCourseNorth,
        moveCourseNorthEast,
        moveCourseNorthWest,
        moveCourseSouthEast,
        moveCourseSouthWest,
        addNewCourse,
        removeCourse,
        emptyNodeCoordinatesAsList,
        mappedCourses,
        unmappedCourses, 
        removeUnmappedCourses
        }