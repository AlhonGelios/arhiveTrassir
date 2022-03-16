import { useState , useEffect } from 'react'

import Services from '../services/Services'

import '../style/listItems.css'

function ListItems () {

    const [zone, setZone] = useState([])

    const services = new Services()

    useEffect(() => {
        updateZone()
    }, [])

    function updateZone () {
        services.getZone('1000').then(changeZone)
    }

    function changeZone(data) {
        setZone(zone => [zone, ...data])
    }


    return (
        <ul className="app-list">
            {/* {elements} */}
        </ul>
    )
}

export default ListItems