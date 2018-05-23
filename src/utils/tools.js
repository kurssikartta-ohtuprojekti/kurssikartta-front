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
// Ottaa JSONin kaikista kuesseista palauttaa syventävät opinnot
const syventavat = (courses) => {
    var resultsfilter = courses.filter(function (i,n){
        // console.log(i)
        // console.log(n)
        return i.level === 'Syventävät'
    })
    // console.log(resultsfilter)

    return resultsfilter
}
// Ottaa JSONin kaikista kuesseista palauttaa matematiikan opinnot
const matematiikka = (courses) => {
    var resultsfilter = courses.filter(function (i,n){
        //console.log(i)
        //console.log(n)
        return i.faculty === 'math'
    })
    //console.log(resultsfilter)

    return resultsfilter
}


module.exports = {
    perusopinnot,
    aineopinnot,
    syventavat,
    matematiikka
}