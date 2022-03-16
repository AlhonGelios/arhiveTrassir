import { useState , useEffect } from 'react'

import Services from '../services/Services'

import '../style/listItems.css'

function ListItems () {

    const [zone, setZone] = useState([])
    const [room, setRoom] = useState([])

    const services = new Services()

    useEffect(() => {
        updateZone()
    }, [])

    function updateZone () {
        services.getZone('1000').then(changeZone)
        services.getRoom('1002').then(changeRoom)
    }

    function changeZone(data) {
        setZone(zone => [...zone, ...data])
    }

    function changeRoom(data) {
        setRoom(room => [...room, ...data])
    }
    //console.log(room);
    
    // const elements = room[0].cameras.map(item => {
    //     return (
    //         <li>{item}</li>
    //     )
    // })
    

    return (
        <ul className="app-list">
            {/* {elements} */}
        </ul>
    )
}

export default ListItems