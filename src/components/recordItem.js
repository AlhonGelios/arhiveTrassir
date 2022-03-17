import { useState , useEffect } from 'react'

import Input from './input'

import Services from '../services/Services'
import '../style/recordsItem.css'

function RecordItem (props) {

    const [room, setRoom] = useState([{cameras:[]}])

    const services = new Services()

    useEffect(() => {
        updateRoom()
    }, [])

    function updateRoom () {
        services.getRoom(props.idRoom).then(changeRoom)
    }

    function changeRoom(data) {
        setRoom([...data])
    }

    const elements = room[0].cameras.map((item, i) => {
        return (
            <li key={`${room[0].id}_${i}`} className={'list-group-item list-group-item-cameras'}>
                <h6 className='badge bg-success'>{item}</h6>
                <Input name ="timeUp" value={props.timeUp} title='&#9650;'/>
                <Input name ="timeDown" value={props.timeDown} title='&#9660;'/>
            </li>
        )
    })


    return (
        <ul className="app-list-cameras">
            {elements}
        </ul>
    )

}

export default RecordItem