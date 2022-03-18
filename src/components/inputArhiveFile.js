import { useState } from 'react'

import {Form, Button, Row, Col} from 'react-bootstrap'
import {utils, read} from 'xlsx'

import ListItems from './listItems'

function InputArhiveFile() {
    const [records, setRecords] = useState([])

    async function listenFile(e) {
        const file = e.target.files[0]

        const wb = read(await (await(file)).arrayBuffer(), {WTF: 1, cellDates: 1, FS: '_'})

        const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {defval: null})
        console.log(data)

        const recordsOfTrassir = []

        function addZero(item) {
            if (item < 10) {
                return item = '0' + item
            } return item
        }

        data.forEach((item, i) => {

            const date = new Date(item.date)
            const dateUp = new Date(item.timeUp)
            const dateDown = new Date(item.timeDown)
            const timeUp = `${addZero(dateUp.getHours())}:${addZero(dateUp.getMinutes())}`
            const timeDown = `${addZero(dateDown.getHours())}:${addZero(dateDown.getMinutes())}`
            const day = addZero(date.getDate() + 1)
            const month = addZero(date.getMonth() + 1)
            const year = date.getFullYear()

            const record = {
                id: i,
                date: `${year}-${month}-${day}`,
                dateOfTrassirUp: `${year}-${month}-${day} ${timeUp}:00`,
                dateOfTrassirDown: `${year}-${month}-${day} ${timeDown}:00`,
                type: item.type,
                speciality: item.speciality,
                stage: item.stage,
                idRoom: item.idRoom,
                room: item.room
            }

            recordsOfTrassir.push(record)
        })

        addRecords(recordsOfTrassir)
    }

    function addRecords(record) {
        setRecords([...record])
    }

    return (
      <div className="inputArhiveFile">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Выберете файл XLSX</Form.Label>
          <Row>
            <Col xs={12} md={8}>
              <Form.Control type="file" onChange={listenFile} />
            </Col>
            <Col xs={6} md={4} className='d-flex justify-content-end'>
              <Button variant="success" >Выгрузить</Button>
            </Col>
          </Row>

          <ListItems records={records}/>


        </Form.Group>
      </div>
    )
  }

  export default InputArhiveFile;