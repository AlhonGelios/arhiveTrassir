import {Form} from 'react-bootstrap'
import {utils, read} from 'xlsx'

function App() {

  async function listenFile(e) {
    const file = e.target.files[0]

    const wb = read(await (await(file)).arrayBuffer(), {WTF: 1, cellDates: 1})

    const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {defval: null})
    console.log(data)

    const date = new Date(data[0].date)
     console.log(date.getDate());
     console.log(date.getMonth());
     console.log(date.getFullYear());
     console.log(date.getTimezoneOffset());
    
    
  }

  return (
    <div className="App">
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Выберете файл XLSX</Form.Label>
        <Form.Control type="file" onChange={listenFile} />
      </Form.Group>
    </div>
  );
}

export default App;
