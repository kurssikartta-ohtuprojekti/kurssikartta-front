// Ottaa JSONin kaikista kurssesista, palauttaa peruskurssit
const basics = (courses) => {
    var resultsfilter = courses.filter(function (i, n) {
        // console.log(i)
        // console.log(n)
        return i.level === 'basic' && i.faculty !== 'stats' && i.faculty !== 'math'
    })
    // console.log(resultsfilter)

    return resultsfilter
}
// Ottaa JSONin kaikista kurssesita palauttaa aineopinnot
const intermediate = (courses) => {
    var resultsfilter = courses.filter(function (i, n) {
        // console.log(i)
        // console.log(n)
        return i.level === 'intermediate' && i.faculty !== 'stats' && i.faculty !== 'math'
    })
    // console.log(resultsfilter)

    return resultsfilter
}
// Ottaa JSONin kaikista kursseista palauttaa syventävät opinnot
const advanced = (courses) => {
    var resultsfilter = courses.filter(function (i, n) {
        // console.log(i)
        // console.log(n)
        return i.level === 'advanced'
    })
    // console.log(resultsfilter)

    return resultsfilter
}
// Ottaa JSONin kaikista kursseista palauttaa matematiikan opinnot
const mathematics = (courses) => {
    var resultsfilter = courses.filter(function (i, n) {
        //console.log(i)
        //console.log(n)
        return i.faculty === 'math'
    })
    //console.log(resultsfilter)

    return resultsfilter
}

const statistics = (courses) => {
    var resultsfilter = courses.filter(function (i, n) {
        return i.faculty === 'stats'
    })
    return resultsfilter
}

// Ottaa JSONin kaikista kursseista palauttaa kartassa näkymättömät
const visibleFalseFilter = (courses) => {
    var resultsfilter = courses.filter(function (i, n) {
        //console.log(i)
        //console.log(n)
        return i.visible === false
    })
    //console.log(resultsfilter)

    return resultsfilter
}

const courseCounter = (courses1, courses2, courses3, courses4, courses5) => {

    if (courses1 === null || courses1 === undefined) {
        courses1 = []
    }
    if (courses2 === null || courses2 === undefined) {
        courses2 = []
    }
    if (courses3 === null || courses3 === undefined) {
        courses3 = []
    }
    if (courses4 === null || courses4 === undefined) {
        courses4 = []
    }
    if (courses5 === null || courses5 === undefined) {
        courses5 = []
    }
    return (courses1.length + courses2.length + courses3.length + courses4.length + courses5.length)
}


// return true if course is not to be filtered, false if course is to be filtered
const periodFilter = (periodFilter, coursePeriods) => {

    // console.log(coursePeriods[periodFilter.year])

    if (coursePeriods === undefined) {
        return true
    }
    if (periodFilter === undefined) {
        return true
    }
    if (!periodFilter.p1 && !periodFilter.p2 && !periodFilter.p3 &&
        !periodFilter.p4 && !periodFilter.pC && !periodFilter.pS) {
        return true
    }
    if (coursePeriods[periodFilter.year] === undefined) {
        return false
    }
    if (coursePeriods[periodFilter.year] === []) {
        return false
    }
    if (periodFilter.p1 && coursePeriods[periodFilter.year][0]) {
        // console.log(coursePeriods[periodFilter.year][0])
        // console.log(periodFilter.p1)
        return true
    }
    if (periodFilter.p2 && coursePeriods[periodFilter.year][1]) {
        return true
    }
    if (periodFilter.pC && coursePeriods[periodFilter.year][2]) {
        return true
    }
    if (periodFilter.p3 && coursePeriods[periodFilter.year][3]) {
        return true
    }
    if (periodFilter.p4 && coursePeriods[periodFilter.year][4]) {
        return true
    }
    if (periodFilter.pS && coursePeriods[periodFilter.year][5]) {
        return true

    }

    return false
}

const completedFilter = (courseCode, userCompleted) => {
    if (userCompleted === undefined) {
        return false;
    }
    for (let i = 0; i < userCompleted.length; i++) {
        if (userCompleted[i] === courseCode) {
            return true
        }
    }
    return false
}


module.exports = {
    basics,
    intermediate,
    advanced,
    mathematics,
    statistics,
    visibleFalseFilter,
    courseCounter,
    periodFilter,
    completedFilter
}