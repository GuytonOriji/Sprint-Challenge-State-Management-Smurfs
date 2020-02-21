import React, {useContext} from 'react';
import { Form, Input } from 'reactstrap';
import SmurfContext from '../contexts/'
import {Button} from 'reactstrap'





const inp ={
  width:"50%"
}



const form ={
display:'flex',
flexDirection:"column",
justifyContent:'center',
alignItems:"center",
gridGap:"15px",

}


const AddingSmurfs = (props) => {


const {smurfs, addSmurf} = useContext(SmurfContext)




console.log("wdwd",smurfs)
  return (
    <Form style={form} onSubmit={addSmurf}>
      <Input placeholder="name" name="name" bsSize="lg" style={inp}/>
      <Input placeholder="age" name="age"  bsSize="lg" style={inp}/>
      <Input placeholder='height' name="height"  bsSize="lg" style={inp}/>
     
     <div>
      <Button type="submit">add Smurf</Button>
      </div>
    </Form>
  );
}

export default AddingSmurfs;

