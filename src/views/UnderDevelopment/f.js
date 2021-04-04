import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [records, setRecords] = useState([])

  useEffect(() => {
    (async() => {
      const result = await axios.get('/files')
      setRecords(result.data.files)
    })()
  }, [])

  const submit = async event => {

    event.preventDefault()

    var FormData = require('form-data')
    const formdata = new FormData()

    console.log(file.name)
    console.log(file.type)

    formdata.append('file', file)
    formdata.append('name', file.name)
    formdata.append('type', file.type)

    console.log(Array.from(formdata))

    const result = await axios.post('/files', formdata )
    // setRecords([result.data, ...records])
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          filename={file} 
          onChange={e => setFile(e.target.files[0])} 
          type="file" 
        ></input>
        <input
          onChange={e => setDescription(e.target.value)} 
          type="text"
          placeholder="description"
        ></input>
        <button type="submit">Submit</button>
      </form>
      {/* <main>
        {records.map(record => (
          <figure key={record.id}>
            <img src={record.file_url}></img>
            <figcaption>{record.name}</figcaption>
            <figcaption>{record.type}</figcaption>
          </figure>
        ))}
      </main> */}
    </div>
  );
}

export default App;
