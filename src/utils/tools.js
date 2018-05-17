const perusopinnot = (courses) => {
    var resultsfilter = courses.filter(function (i,n){
        // console.log(i)
        // console.log(n)
        return i.level === 'Perusopinnot'
    })
    // console.log(resultsfilter)

    return resultsfilter
}
const aineopinnot = (courses) => {
    var resultsfilter = courses.filter(function (i,n){
        // console.log(i)
        // console.log(n)
        return i.level === 'Aineopinnot'
    })
    // console.log(resultsfilter)

    return resultsfilter
}
const syventavat = (courses) => {
    var resultsfilter = courses.filter(function (i,n){
        // console.log(i)
        // console.log(n)
        return i.level === 'Syventävät'
    })
    // console.log(resultsfilter)

    return resultsfilter
}


module.exports = {
    perusopinnot,
    aineopinnot,
    syventavat
}