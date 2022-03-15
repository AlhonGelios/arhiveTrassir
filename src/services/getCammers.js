
function getCamers () {
    const requestURL = './roomCamers.json'
    const request = new XMLHttpRequest ()

    request.open('GET', requestURL)
    request.responseType = 'json'
    request.send()

    request.onload = function () {
        const dataCamers = request.response
        console.log(dataCamers)
    }

}

export default getCamers