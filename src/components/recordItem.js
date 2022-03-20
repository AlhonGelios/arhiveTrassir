import { useState , useEffect } from 'react'

import Services from '../services/Services'
import '../style/recordsItem.css'

import Camera from './camera'

function RecordItem (props) {

    const [room, setRoom] = useState([{cameras:[], idZone : null}])
    const [zone, setZone] = useState([])

    const services = new Services()

    useEffect(() => {
        services.getRoom(props.idRoom).then(changeRoom)
    }, [])

    useEffect(() => {
        services.getZone(room[0].idZone).then(changeZone)
    }, [room])

    function changeRoom(data) {
        setRoom([...data])
    }

    function changeZone(data) {
        setZone([...data])
    }

    const elements = room[0].cameras.map((item, i) => {
        return (
            <Camera
                name={item}
                key={`${room[0].id}_${i}`}
                timeUp={props.timeUp}
                timeDown={props.timeDown}
                data={props.data}
                request={props.request}
                zoneDate={zone}
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