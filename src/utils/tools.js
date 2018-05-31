// Ottaa JSONin kaikista kurssesista, palauttaa peruskurssit
const perusopinnot = (courses) => { 
    var resultsfilter = courses.filter(function (i,n){
        // console.log(i)
        // console.log(n)
        return i.level === 'Perusopinnot'  && i.faculty !== 'stats' && i.faculty !== 'math' 
    })
    // console.log(resultsfilter)

    return resultsfilter
}
// Ottaa JSONin kaikista kurssesita palauttaa aineopinnot
const aineopinnot = (courses) => {
    var resultsfilter = courses.filter(function (i,n){
        // console.log(i)
        // console.log(n)
        return i.level === 'Aineopinnot'
    })
    // console.log(resultsfilter)

    return resultsfilter
}
// Ottaa JSONin kaikista kursseista palauttaa syventävät opinnot
const syventavat = (courses) => {
    var resultsfilter = courses.filter(function (i,n){
        // console.log(i)
        // console.log(n)
        return i.level === 'Syventävät'
    })
    // console.log(resultsfilter)

    return resultsfilter
}
// Ottaa JSONin kaikista kursseista palauttaa matematiikan opinnot
const matematiikka = (courses) => {
    var resultsfilter = courses.filter(function (i,n){
        //console.log(i)
        //console.log(n)
        return i.faculty === 'math'
    })
    //console.log(resultsfilter)

    return resultsfilter
}

const courseCounter = (courses1, courses2, courses3, courses4) => {

    if (courses1 === null) {
        courses1 = []
    }
    if (courses2 === null) {
        courses2 = []
    }
    if (courses3 === null) {
        courses3 = []
    }
    if (courses4 === null) {
        courses4 = []
    }
    return (courses1.length + courses2.length + courses3.length + courses4.length)
}

const visibleFalseCounter = (courses1, courses2, courses3, courses4) => {
    if (courses1 === null) {
        courses1 = []
    }
    if (courses2 === null) {
        courses2 = []
    }
    if (courses3 === null) {
        courses3 = []
    }
    if (courses4 === null) {
        courses4 = []
    }
    let count = 0;
    for (let i = 0; i < courses1.length; i++) {
        if (courses1[i].visible === false) {
            count++;
        }
    }
    for (let i = 0; i < courses2.length; i++) {
        if (courses2[i].visible === false) {
            count++;
        }
    }
    for (let i = 0; i < courses3.length; i++) {
        if (courses3[i].visible === false) {
            count++;
        }
    }
    for (let i = 0; i < courses4.length; i++) {
        if (courses4[i].visible === false) {
            count++;
        }
    }

    return count;
}


module.exports = {
    perusopinnot,
    aineopinnot,
    syventavat,
    matematiikka,
    courseCounter,
    visibleFalseCounter
}