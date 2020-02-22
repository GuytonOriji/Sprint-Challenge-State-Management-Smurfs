import React, {useContext} from 'react';
import { Form, Input } from 'reactstrap';
import SmurfContext from '../contexts/'
import {Button, Label} from 'reactstrap'





const inp ={
  width:"50%"
}



const hhBorder ={
  width:"100%",
  lineHeight:'.1em',
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   borderTop:'double 4px',
   borderBottom:'dashed 4px',
}

const hh ={
  color:'azure',
  textShadow:'0 0 10px #000',

}

const AddingSmurfs = (props) => {


const {smurfs,addSmurfName, addSmurfAge,addSmurfHeight, addSmurf} = useContext(SmurfContext)




  return (
    <Form  onSubmit={addSmurf} className="formio">
    <span style={hhBorder}><h1 style={hh}>ADD A SMURF HERE</h1></span>
    <Label htmlFor="name">
      <Input placeholder="name" name="name" bsSize="lg" style={inp} onChange={addSmurfName}/>
      </Label>

    <Label htmlFor="age">
      <Input type='number' placeholder="age" name="age" 
       bsSize="lg" style={inp} maxLength='400' minLength='1'
        onChange={addSmurfAge}/>
      </Label>

    <Label htmlFor="height">
      <Input placeholder='height' name="height"  bsSize="lg" style={inp}
        onChange={addSmurfHeight}/>
      </Label>
     
     <div className='btnBox'>
      <Button type="submit" color='info'>add Smurf</Button>
      </div>
    </Form>
  );
}

export default AddingSmurfs;

