import {useState} from 'react'

import {InputGroup, FormControl} from 'react-bootstrap'

function Input (props) {
    const [value, setValue] = useState(props.value)

    function onValueChange(e) {
        setValue(e.target.value)
    }

    return (
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id={props.name}>{props.title}</InputGroup.Text>
            <FormControl
                aria-describedby={props.name}
                value = {value}
                name = {props.name}
                onChange={onValueChange}
            />
        </InputGroup>
    )
}

export default Input