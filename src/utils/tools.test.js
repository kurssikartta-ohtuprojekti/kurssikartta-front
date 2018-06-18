const tools = require('./tools')

const courses = [
    {
        code: "TKT21010",
        name: "Dummy",
        level: "Perusopinnot",
        compulsory: false,
        prereqs: [],
        studytrack: ["ss"],
        ects: "1-10",
        url: "https://courses.helsinki.fi/fi/TKT21010"
    },
    {
        code: "TKT21011",
        name: "Dummy2",
        level: "Perusopinnot",
        compulsory: false,
        prereqs: [],
        studytrack: ["ss"],
        ects: "1-10",
        url: "https://courses.helsinki.fi/fi/TKT21010"
    },
    {
        code: "TKT21013",
        name: "Dummy3",
        level: "Aineopinnot",
        compulsory: false,
        prereqs: [],
        studytrack: ["ss"],
        ects: "1-10",
        url: "https://courses.helsinki.fi/fi/TKT21010"
    },
    {
        code: "TKT21014",
        name: "Dummy4",
        level: "Aineopinnot",
        compulsory: false,
        prereqs: [],
        studytrack: ["ss"],
        ects: "1-10",
        url: "https://courses.helsinki.fi/fi/TKT21010"
    },
    {
        code: "TKT21015",
        name: "Dummy5",
        level: "Syventävät",
        compulsory: false,
        prereqs: [],
        studytrack: ["ss"],
        ects: "1-10",
        url: "https://courses.helsinki.fi/fi/TKT21010"
    },
    {
        code: "TKT21016",
        name: "Dummy6",
        level: "Syventävät",
        compulsory: false,
        prereqs: [],
        studytrack: ["ss"],
        ects: "1-10",
        url: "https://courses.helsinki.fi/fi/TKT21010"
    },
    {
        code: "MAT11001",
        name: "Dummy7",
        level: "Matematiikka",
        faculty: "math",
        visible: false,
        compulsory: false,
        prereqs: [],
        studytrack: ["math"],
        ects: "1-10",
        url: "https://courses.helsinki.fi/fi/mat11001"
    },
    {
        code: "MAT11002",
        name: "Dummy8",
        level: "Matematiikka",
        faculty: "math",
        visible: false,
        compulsory: false,
        prereqs: [],
        studytrack: ["math"],
        ects: "1-10",
        url: "https://courses.helsinki.fi/fi/mat11002/"
    }
]
test('empty course inputs (perus)', () => {
    const empty = []

    const result = tools.basics(empty)

    // console.log(result)
    expect(result).toEqual([])
})
test('empty course inputs (aine)', () => {
    const empty = []

    const result = tools.intermediate(empty)

    // console.log(result)s
    expect(result).toEqual([])
})
test('empty course inputs (syventava)', () => {
    const empty = []

    const result = tools.advanced(empty)

    // console.log(result)
    expect(result).toEqual([])
})

test('empty course inputs (matematiikka)', () => {
    const empty = []

    const result = tools.mathematics(empty)

    // console.log(result)
    expect(result).toEqual([])
})

test('peruskurssit returned', () => {

    const result = tools.basics(courses)

    // console.log(result)
    expect(result).toEqual([
        {
            code: 'TKT21010',
            name: 'Dummy',
            level: 'Perusopinnot',
            compulsory: false,
            prereqs: [],
            studytrack: ['ss'],
            ects: '1-10',
            url: 'https://courses.helsinki.fi/fi/TKT21010'
        },
        {
            code: 'TKT21011',
            name: 'Dummy2',
            level: 'Perusopinnot',
            compulsory: false,
            prereqs: [],
            studytrack: ['ss'],
            ects: '1-10',
            url: 'https://courses.helsinki.fi/fi/TKT21010'
        }
    ]
    )
})
test('aineopinnot returned', () => {
    const result = tools.intermediate(courses)

    // console.log(result)
    expect(result).toEqual([
        {
            code: 'TKT21013',
            name: 'Dummy3',
            level: 'Aineopinnot',
            compulsory: false,
            prereqs: [],
            studytrack: ['ss'],
            ects: '1-10',
            url: 'https://courses.helsinki.fi/fi/TKT21010'
        },
        {
            code: 'TKT21014',
            name: 'Dummy4',
            level: 'Aineopinnot',
            compulsory: false,
            prereqs: [],
            studytrack: ['ss'],
            ects: '1-10',
            url: 'https://courses.helsinki.fi/fi/TKT21010'
        }]
    )
})
test('syventavat opinnot returned', () => {
    const result = tools.advanced(courses)

    // console.log(result)
    expect(result).toEqual([
        {
            code: 'TKT21015',
            name: 'Dummy5',
            level: 'Syventävät',
            compulsory: false,
            prereqs: [],
            studytrack: ['ss'],
            ects: '1-10',
            url: 'https://courses.helsinki.fi/fi/TKT21010'
        },
        {
            code: 'TKT21016',
            name: 'Dummy6',
            level: 'Syventävät',
            compulsory: false,
            prereqs: [],
            studytrack: ['ss'],
            ects: '1-10',
            url: 'https://courses.helsinki.fi/fi/TKT21010'
        }]
    )
})

test('matematiikka returned', () => {
    const result = tools.mathematics(courses)

    expect(result).toEqual([
        {
            code: "MAT11001",
            name: "Dummy7",
            level: "Matematiikka",
            faculty: "math",
            visible: false,
            compulsory: false,
            prereqs: [],
            studytrack: ["math"],
            ects: "1-10",
            url: "https://courses.helsinki.fi/fi/mat11001"
        },
        {
            code: "MAT11002",
            name: "Dummy8",
            level: "Matematiikka",
            faculty: "math",
            visible: false,
            compulsory: false,
            prereqs: [],
            studytrack: ["math"],
            ects: "1-10",
            url: "https://courses.helsinki.fi/fi/mat11002/"
        }
    ])

})

test('visiblefalsefilter returns correct ones', () => {
    
    const result = tools.visibleFalseFilter(courses)

    expect(result).toEqual([
        {
            code: "MAT11001",
            name: "Dummy7",
            level: "Matematiikka",
            faculty: "math",
            visible: false,
            compulsory: false,
            prereqs: [],
            studytrack: ["math"],
            ects: "1-10",
            url: "https://courses.helsinki.fi/fi/mat11001"
        },
        {
            code: "MAT11002",
            name: "Dummy8",
            level: "Matematiikka",
            faculty: "math",
            visible: false,
            compulsory: false,
            prereqs: [],
            studytrack: ["math"],
            ects: "1-10",
            url: "https://courses.helsinki.fi/fi/mat11002/"
        }
    ])
})

test('courseCounter return correct amount', () => {
    const courses1 = tools.basics(courses)
    const courses2 = tools.intermediate(courses)
    const courses3 = tools.advanced(courses)
    const courses4 = tools.mathematics(courses)

    const result = tools.courseCounter(courses1, courses2, courses3, courses4)

    expect(result).toEqual(8)
})

test('periodfilter returns true if course is not to be filtered', () => {
    const p1 = false
    const p2 = false
    const p3 = false
    const p4 = false
    const pC = false
    const pS = false
    const year = 2018

    const result = tools.periodFilter({p1, p2, p3, p4, pC, pS, year}, 2019)

    expect(result).toEqual(true)
})

test('periodfilter returns false if course is to be filtered', () => {
    const p1 = true
    const p2 = true
    const p3 = true
    const p4 = true
    const pC = true
    const pS = true
    const year = 2018

    const result = tools.periodFilter({p1, p2, p3, p4, pC, pS, year}, 2019)

    expect(result).toEqual(false)
})