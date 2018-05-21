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
    }
]
test('empty course inputs (perus)', () => {
    const empty = []
  
    const result = tools.perusopinnot(empty)
    
    // console.log(result)
    expect(result).toEqual([])
})
test('empty course inputs (aine)', () => {
    const empty = []
  
    const result = tools.aineopinnot(empty)
    
    // console.log(result)s
    expect(result).toEqual([])
})
test('empty course inputs (syventava)', () => {
    const empty = []
  
    const result = tools.syventavat(empty)
    
    // console.log(result)
    expect(result).toEqual([])
})

test('peruskurssit returned', () => {
  
    const result = tools.perusopinnot(courses)
    
    // console.log(result)
    expect(result).toEqual([ 
                            {   code: 'TKT21010',
                                name: 'Dummy',
                                level: 'Perusopinnot',
                                compulsory: false,
                                prereqs: [],
                                studytrack: [ 'ss' ],
                                ects: '1-10',
                                url: 'https://courses.helsinki.fi/fi/TKT21010' },
                            {   code: 'TKT21011',
                                name: 'Dummy2',
                                level: 'Perusopinnot',
                                compulsory: false,
                                prereqs: [],
                                studytrack: [ 'ss' ],
                                ects: '1-10',
                                url: 'https://courses.helsinki.fi/fi/TKT21010' 
                            } 
                            ]
    )
})
test('aineopinnot returned', () =>{
    const result = tools.aineopinnot(courses)
    
    // console.log(result)
    expect(result).toEqual([ 
                            {   code: 'TKT21013',
                                name: 'Dummy3',
                                level: 'Aineopinnot',
                                compulsory: false,
                                prereqs: [],
                                studytrack: [ 'ss' ],
                                ects: '1-10',
                                url: 'https://courses.helsinki.fi/fi/TKT21010' },
                            {   code: 'TKT21014',
                                name: 'Dummy4',
                                level: 'Aineopinnot',
                                compulsory: false,
                                prereqs: [],
                                studytrack: [ 'ss' ],
                                ects: '1-10',
                                url: 'https://courses.helsinki.fi/fi/TKT21010' } ]
    )
})
test('syventavat opinnot returned', () =>{
    const result = tools.syventavat(courses)
    
    // console.log(result)
    expect(result).toEqual([ 
                            {   code: 'TKT21015',
                                name: 'Dummy5',
                                level: 'Syventävät',
                                compulsory: false,
                                prereqs: [],
                                studytrack: [ 'ss' ],
                                ects: '1-10',
                                url: 'https://courses.helsinki.fi/fi/TKT21010' },
                            {   code: 'TKT21016',
                                name: 'Dummy6',
                                level: 'Syventävät',
                                compulsory: false,
                                prereqs: [],
                                studytrack: [ 'ss' ],
                                ects: '1-10',
                                url: 'https://courses.helsinki.fi/fi/TKT21010' } ]
    )
})