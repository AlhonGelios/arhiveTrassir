import { useState } from 'react'

import RecordItem from './recordItem'
import {Row, Col} from 'react-bootstrap'

import '../style/listItems.css'

function ListItems ({records}) {

    const [requests, setRequests] = useState([])

    const genRequest = (dataAll) => {

        const {selected, timeUp, timeDown, name, data} = dataAll
        const filename = `${data.type}_${data.speciality}_${data.stage}_${data.date}_${name}.avi`

        const request = `https://192.168.1.200:8080/objects/operatorgui_jmxwAqxm/archive_export_ex?channel_name_or_guid=${name}&start_time_YYYYMMDD_HHMMSS=${timeUp}&end_time_YYYYMMDD_HHMMSS=${timeDown}&filename=${filename}&archive_on_device=0&sid=e03qD0eg`

        // setRequests(requests => {
        //     requests.map(item => {
        //         if (item.id === `${data.id}_${name}`) {
        //             item.req = request
        //         }
        //     })
        // })
    }

    const elements = records.map(item => {

        const {idRoom, dateOfTrassirUp, dateOfTrassirDown, date, type, speciality, stage, id} = item

        return (
            <li key={id}  className={'list-group-item'}>
                <Row xs='auto' className=''>
                    <Col className='ms-3'>
                        <div className='title'>Дата</div>
                        {date}
                    </Col>
                    <Col>
                        <div className="vr h-100"/>
                    </Col>
                    <Col>
                        <div className='title'>Тип</div>
                        {type}
                    </Col>
                    <Col>
                        <div className="vr h-100"/>
                    </Col>
                    <Col>
                        <div className='title'>Специальность</div>
                        {speciality}
                    </Col>
                    <Col>
                        <div className="vr h-100"/>
                    </Col>
                    <Col>
                        <div className='title'>Этап</div>
                        {stage}
                    </Col>
                </Row>

                <RecordItem idRoom={idRoom} timeUp={dateOfTrassirUp} timeDown={dateOfTrassirDown} data={item} request={genRequest}/>
            </li>
        )
    })

    return (
        <ul className="app-list">
            {elements}
        </ul>
    )

}

export default ListItems