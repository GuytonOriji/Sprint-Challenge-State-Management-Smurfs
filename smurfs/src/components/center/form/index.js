import React, {useContext} from 'react';
import { Form, Input } from 'reactstrap';
import SmurfContext from '../contexts/'
import {Button, Label} from 'reactstrap'





const inp ={
  width:"50%"
}





const AddingSmurfs = (props) => {


const {smurfs,addSmurfName, addSmurfAge,addSmurfHeight, addSmurf} = useContext(SmurfContext)




console.log("wdwd",smurfs)
  return (
    <Form  onSubmit={addSmurf} className="formio">
    <Label htmlFor="name">
      <Input placeholder="name" name="name" bsSize="lg" style={inp} onChange={addSmurfName}/>
      </Label>

    <Label htmlFor="age">
      <Input type='number' placeholder="age" name="age"  bsSize="lg" style={inp}  onChange={addSmurfAge}/>
      </Label>

    <Label htmlFor="height">
      <Input placeholder='height' name="height"  bsSize="lg" style={inp}  onChange={addSmurfHeight}/>
      </Label>
     
     <div>
      <Button type="submit">add Smurf</Button>
      </div>
    </Form>
  );
}

export default AddingSmurfs;

