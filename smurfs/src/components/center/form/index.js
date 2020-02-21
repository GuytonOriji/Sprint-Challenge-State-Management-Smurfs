import React, {useContext} from 'react';
import { Form, Input } from 'reactstrap';
import SmurfContext from '../contexts/'
import {Button, Label} from 'reactstrap'





const inp ={
  width:"50%"
}

const btnz = {
  display:"flex",
  gridGap:"10px"
}



const AddingSmurfs = (props) => {


const {smurfs,addSmurfName, addSmurfAge,addSmurfHeight, addSmurf} = useContext(SmurfContext)




  return (
    <Form  onSubmit={addSmurf} className="formio">
    <Label htmlFor="name">
      <Input placeholder="name" name="name" bsSize="lg" style={inp} onChange={addSmurfName}/>
      </Label>

    <Label htmlFor="age">
      <Input type='number' placeholder="age" name="age" 
       bsSize="lg" style={inp} maxlength='400' minlength='1'
        onChange={addSmurfAge}/>
      </Label>

    <Label htmlFor="height">
      <Input placeholder='height' name="height"  bsSize="lg" style={inp}
        onChange={addSmurfHeight}/>
      </Label>
     
     <div style={btnz}>
     <aside>
      <Button type="submit" color='success'>add Smurf</Button>
      </aside>
      <aside>
      <Button type="button" color='info' onClick={()=>window.location.reload()}>see new vilage</Button>
      </aside>
      </div>
    </Form>
  );
}

export default AddingSmurfs;

