const courseMatrices = require('./courseMatrices')

const defaultMatrice = courseMatrices.defaultMatrix()
const emptyMatrice = courseMatrices.emptyMatrix()


test('new course gets added to the matrice', () => {
    const courseCode = 'TKT21010'

    const result = courseMatrices.addNewCourse(courseCode, emptyMatrice, 1, 1)

    //console.log(result)
    expect(result[1][1]).toEqual(courseCode)
})

test('new course not added if coordinates out of boundary', () => {
    const courseCode = 'TKT21010'

    const result = courseMatrices.addNewCourse(courseCode, emptyMatrice, -1, 1)

    //console.log(result)
    expect(result.error).toEqual('Given coordinates out of matrice')
})

test('new course not added if coordinates taken', () => {
    const courseCode = 'TKT21010'

    const result = courseMatrices.addNewCourse(courseCode, defaultMatrice, 5, 6)

    //onsole.log(result)
    expect(result.error).toEqual('Matrix node already taken by ' + defaultMatrice[6][5])
})

test('new course added if coordinates on scope', () => {
    const courseCode = 'TKT21010'

    const result = courseMatrices.addNewCourse(courseCode, defaultMatrice, 37, 37)

    //onsole.log(result)
    expect(result[37][37]).toEqual(courseCode)
})

test('course removed if it exists', () => {
    const courseCode = 'CSM14106'

    const result = courseMatrices.removeCourse(courseCode, defaultMatrice)

    //console.log(result)
    expect(result[6][5]).toEqual('.')
})

test('removeCourse returns error if course not found', () => {
    const courseCode = 'CSM14106'

    const result = courseMatrices.removeCourse(courseCode, emptyMatrice)

    //console.log(result)
    expect(result.error).toEqual('Course not found in matrice')
})

test('findcourseByCode returns null if course not found', () => {
    const courseCode = 'CSM14106'

    const result = courseMatrices.matrixFindCourseByCode(courseCode, emptyMatrice)

    //console.log(result)
    expect(result).toEqual(null)
})

test('findcourseByCode returns correct info if course found', () => {
    const courseCode = 'CSM14103'

    const result = courseMatrices.matrixFindCourseByCode(courseCode, defaultMatrice)

    //console.log(result)
    expect(result.code).toEqual(courseCode)
    expect(result.y).toEqual(8)
    expect(result.x).toEqual(7)
})

test('move course by x and y returns err if invalid course or matrix', () => {
    const courseCode = 'CSM14106'
    const matrix = [1][2]

    const result = courseMatrices.moveCourseByXAndY('dummdumm,', matrix)

    //console.log(result)
    expect(result.error).toEqual('Invalid course code or matrice')
})

test('move course by x and y returns err if course not found', () => {
    const courseCode = 'CSM14106'

    const result = courseMatrices.moveCourseByXAndY(courseCode, emptyMatrice)

    //console.log(result)
    expect(result.error).toEqual('Course not found in matrice')
})

test('move course by x abd y returns err if coordniates outbound', () => {
    const courseCode = 'CSM14104'

    const result = courseMatrices.moveCourseByXAndY(courseCode, defaultMatrice, 40, 40)

    //console.log(result)
    expect(result.error).toEqual('new coordinates out of matrice')
})

test('move course by x and y returns err if spot taken', () => {
    const courseCode = 'CSM14104'

    const result = courseMatrices.moveCourseByXAndY(courseCode, defaultMatrice, 0, 5)

    //console.log(result)
    expect(result.error).toEqual('Matrix node already taken by ' + 'CSM13402')
})

test('move course by x and y moves correctly', () => {
    const courseCode = 'DATA12001'

    const result = courseMatrices.moveCourseByXAndY(courseCode, defaultMatrice, 1, 1)

    //console.log(result)
    expect(result[31][31]).toEqual('DATA12001')
})

test('move course to new coordinates err if out of bound', () => {
    const courseCode = 'CSM13402'

    const result = courseMatrices.moveCourseToNewCoordinates(courseCode, defaultMatrice, 50, 50)

    //console.log(result)
    expect(result.error).toEqual('Given coordinates out of matrice')
})

test('move course to new coordinates err if node taken', () => {
    const courseCode = 'CSM13402'

    const result = courseMatrices.moveCourseToNewCoordinates(courseCode, defaultMatrice, 22, 10)

    //console.log(result)
    expect(result.error).toEqual("Matrix node already taken by CSM13104")
})

test('move course to new coordinates moves properly', () => {
    const courseCode = 'CSM13402'

    const result = courseMatrices.moveCourseToNewCoordinates(courseCode, defaultMatrice, 1, 1)

    //console.log(result)
    expect(result[1][1]).toEqual('CSM13402')
})

test('mappedcourses maps all the courses', () => {
    const matrix = [];
    for (let i = 0; i < 38; i++) {
        matrix[i] = [];
        for (let j = 0; j < 38; j++) {
            matrix[i][j] = '.';
        }
    }
    matrix[6][5] = 'CSM14106'
    matrix[8][7] = 'CSM14103'
    matrix[10][7] = 'CSM14104'

    const map = []
    map.push('CSM14106')
    map.push('CSM14103')
    map.push('CSM14104')

    const result = courseMatrices.mappedCourses(matrix)

    //console.log(result)
    expect(result).toEqual(map)
})