import { Form, Button } from 'react-bootstrap';

export default function Searcharea() {
    return (
<div className ="searcharea mb-4">
<Form inline>
      
<select id="inputState">
        <option >Boat Type</option>
        <option>...</option>
      </select>

      <select id="inputState">
        <option >Service Type</option>
        <option>...</option>
      </select>

     
      <select id="inputState">
        <option >Boat Location</option>
        <option>...</option>
      </select>

     

      <select id="inputState">
        <option >Job Type</option>
        <option>...</option>
      </select>

     

      <Button className ="ml-auto">Apply</Button>
    </Form>
    </div>
    )
}