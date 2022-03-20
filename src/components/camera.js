import { useState, useEffect } from 'react'
import {Form} from 'react-bootstrap'
import Input from './input'

function Camera (props) {
    const [selected, setSelected] = useState(true)
    const [timeUp, setTimeUp] = useState(props.timeUp)
    const [timeDown, setTimeDown] = useState(props.timeDown)

    const {data, name} = props

    function changeSelected() {
        setSelected(selected => !selected)
    }

    function changeTimeUp(value) {
        setTimeUp(value)
    }

    function changeTimeDown(value) {
        setTimeDown(value)
    }

    useEffect(() => {
        props.request({selected, timeUp, timeDown, name, data})
    }, [selected, timeUp, timeDown])

    const clazz = selected ? 'bg-success' : 'bg-secondary'

    return (

        <li className={'list-group-item m-2'}>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <h6 className={`mb-0 fw-normal fst-italic badge ${clazz}`}>{props.name}</h6>
                <Form.Check
                    type="switch"
                    id="camera-switch"
                    checked = {selected}
                    onChange = {changeSelected}
                />
            </div>
            <Input name ="timeUp" value={timeUp} title='&#9650;' editTimeUp={changeTimeUp}/>
            <Input name ="timeDown" value={timeDown} title='&#9660;' editTimeUp={changeTimeDown}/>
        </li>
    )
}

export default Camera