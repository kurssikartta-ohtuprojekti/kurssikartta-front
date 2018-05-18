import axios from 'axios'
const baseUrl = 'https://weboodi.helsinki.fi/hy/api/public/opetushaku/hae?nimiTaiTunniste='


const getCourseInfo = async (id) => {

    const request = axios.get(baseUrl.contact(id)).then(response => {

        const array = response.data
        const opintokohteet = new Array(array.length)
        for (i = 0; i < opintokohteet.length; i++) {
          //  console.log("array", array[i])
            opintokohteet[i] = {
                opintokohteenTunniste: array[i].opintokohde.opintokohteenTunniste,
                opintokohteenNimi: array[i].opintokohde.opintokohteenNimi,
                opetustapahtumat: array[i].opetustapahtumat.map((item) => {
                    const obj = {
                        nimi: item.opetustapahtumanNimi,
                        alkamisaika: item.alkuPvm,
                        loppumisaika: item.loppuPvm,
                        tyyppi: item.opetustapahtumanTyyppiSelite,
                        ilmoittautuminenKaynnissa: (item.tila === "ilmoittautuminen_kaynnissa")
                    }

                    return obj
                }
                )
            }
        }

        return request.then(response => response.data)
    })

}




export default { getCourseInfo }