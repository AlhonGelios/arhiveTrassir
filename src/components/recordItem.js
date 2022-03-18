import { useState , useEffect } from 'react'

import Services from '../services/Services'
import '../style/recordsItem.css'

import Camera from './camera'

function RecordItem (props) {

    const [room, setRoom] = useState([{cameras:[], idZone : null}])

    const services = new Services()

    useEffect(() => {
        services.getRoom(props.idRoom).then(changeRoom)
    }, [])


    function changeRoom(data) {
        setRoom([...data])
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