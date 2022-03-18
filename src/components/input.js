import {InputGroup, FormControl} from 'react-bootstrap'

function Input (props) {

    function onValueChange(e) {
        props.editTimeUp(e.target.value)
    }

    return (
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id={props.name}>{props.title}</InputGroup.Text>
            <FormControl
                aria-describedby={props.name}
                value = {props.value}
                name = {props.name}
                onChange={onValueChange}

            />
        </InputGroup>
    )
}

export default Input