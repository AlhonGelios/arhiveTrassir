import { useState , useEffect } from 'react'

import Services from '../services/Services'
import '../style/recordsItem.css'

import Camera from './camera'

function RecordItem ({idRoom, timeUp, timeDown, data, request}) {

    const [room, setRoom] = useState([{cameras:[], idZone : null}])
    // const [zone, setZone] = useState([])

    const services = new Services()

    useEffect(() => {
        services.getRoom(idRoom).then(res => setRoom([...res]))
        // console.log('effect')
    }, [])

    // useEffect(() => {
    //     services.getZone(room[0].idZone).then(changeZone)
    // }, [room])

    // function changeRoom(data) {
    //     setRoom([...data])
    // }

    // function changeZone(data) {
    //     setZone([...data])
    // }

    const elements = room[0].cameras.map((item, i) => {
        // console.log('return')
        return (
            <Camera
                name={item}
                key={`${room[0].id}_${i}`}
                timeUp={timeUp}
                timeDown={timeDown}
                data={data}
                request={request}
                idZone={room[0].idZone}
            />
        )
    })

    return (
        <ul className="app-list-cameras">
            {elements}
        </ul>
    )

}

export default RecordItem