import { useEffect, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import './App.css';



function App() {
const [filter, setFilter]= useState([1,''])

const [foundUser, setFoundUser] = useState([])

let option = document.querySelector('#option')
const test = (e) =>{
  setFilter([option.value, e.target.value])
}

useEffect(()=>{
  fetch(`https://searchserverrr.herokuapp.com/?=${filter}`)
  .then(res => res.json())
  .then(data => setFoundUser(data))
}, [filter])
console.log(foundUser);
return (
<>

  <Form className='w-25 border border-primary border-circle ps-5 pe-5'>
      <Form.Group className="mb-3">
          <Form.Label>Xolatni tanlang</Form.Label>
          <Form.Select aria-label="Default select example" id='option'>
            <option value="1">Boshidan</option>
            <option value="2">Oxridan</option>
            <option value="3">Ichidan</option>
          </Form.Select>
        </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Izalsh</Form.Label>
        <Form.Control type="email" placeholder="ism kiriting" onInput={test}/>
      </Form.Group>
  </Form>
  <Table striped bordered hover className='mt-3'>
    <thead>
      <tr>
        <th>#</th>
        <th>F.I.SH</th>
        <th>Manzil</th>
      </tr>
    </thead>
    <tbody>
      {foundUser && foundUser.map((e, i)=>(
      <tr key={i}>
        <td>{e.user_id}</td>
        <td>{e.user_name}</td>
        <td>{e.user_city}</td>
      </tr>
      ))}
    </tbody>
  </Table>
</>
);
}

export default App;