import axios from 'axios'
const baseUrl = 'https://weboodi.helsinki.fi/hy/api/public/opetushaku/hae?nimiTaiTunniste='

const mapper = (item) => {
    return {
        nimi: item.opetustapahtumanNimi,
        alkamisaika: item.alkuPvm,
        loppumisaika: item.loppuPvm,
        tyyppi: item.opetustapahtumanTyyppiSelite,
        ilmoittautuminenKaynnissa: (item.tila === "ilmoittautuminen_kaynnissa")
    }
}

const getCourseInfo = async (id) => {
    console.log('url: ', baseUrl.concat(id))
    return axios
        .get(baseUrl.concat(id), {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => {
            return response.data.map((kohde) => {
                return {
                    opintokohteenTunniste: kohde.opintokohde.opintokohteenTunniste,
                    opintokohteenNimi: kohde.opintokohde.opintokohteenNimi,
                    opetustapahtumat: kohde.opetustapahtumat.map(mapper()),
                    ilmoauki: kohde.ilmoittautumiskelpoinen
                }
            })

        })

}




export default { getCourseInfo }