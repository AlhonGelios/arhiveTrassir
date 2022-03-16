import { useState} from 'react'

import {Form} from 'react-bootstrap'
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

        data.forEach((item) => {

            const date = new Date(item.date)
            const dateUp = new Date(item.timeUp)
            const dateDown = new Date(item.timeDown)
            const timeUp = `${addZero(dateUp.getHours())}${addZero(dateUp.getMinutes())}`
            const timeDown = `${addZero(dateDown.getHours())}${addZero(dateDown.getMinutes())}`
            const day = addZero(date.getDate() + 1)
            const month = addZero(date.getMonth() + 1)
            const year = date.getFullYear()

            const record = {
                dateOfTrassirUp: `${year}${month}${day}_${timeUp}00`,
                dateOfTrassirDown: `${year}${month}${day}_${timeDown}00`,
                type: item.type,
                speciality: item.speciality,
                satge: item.stage,
                idRoom: item.idRoom
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
          <Form.Control type="file" onChange={listenFile} />
          <ListItems records={records}/>
        </Form.Group>
      </div>
    )
  }

  export default InputArhiveFile;