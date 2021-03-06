class Services {
    _url = 'http://localhost:3000'

    sendRequestTrassirSid = async () => {
        const req = 'https://192.168.1.40:8080/login?password=root'
        const req1 = 'https://192.168.1.40:8080/objects/?sid=c2ue9V1W'
    }

    getResource = async (_url) => {
        let res = await fetch(_url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${_url}, status: ${res.status}`)
        } else console.log(res.status)

        return await res.json()
    }

    getZone = async (idZone) => {
        const res =  await (this.getResource(`${this._url}/zone?id=${idZone}`))
        return res
    }

    getRoom = async (idRoom) => {
        const res =  await (this.getResource(`${this._url}/rooms?id=${idRoom}`))
        return res
    }

    // _transform = (zone) => {
    //     return {
    //         id: zone.id,
    //         name: zone.name,
    //         server: zone.server
    //     }
    // }
}

export default Services