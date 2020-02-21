import React, { useState , useEffect,Component } from "react";
import styled from 'styled-components'
import axios from 'axios'
import SmurfContext from '../contexts/'
import AddSmurf from '../form/'
import { Alert , Container} from 'reactstrap';








const tab ={
  width:"400px"
}


const boxWithTabs ={
  width:'100%',
 display:'flex',
flexDirection:"column",
justifyContent:'center',
alignItems:"center",
}


const Display =()=> {




const [smurfs,setSmurfs] = useState([])

  useEffect(()=>{
        axios.get("http://localhost:3333/smurfs/").then(wtf=>{
          setSmurfs(wtf.data)
        })
    },[])





  const addSmurf = (e) =>{
        e.preventDefault()

        //  axios.post("http://localhost:3333/smurfs/").then(wtf=>{
        //   setSmurfs(wtf.data)
        // })

        console.log(e)
  }

    return (
      <Container>
      <SmurfContext.Provider value={{smurfs, addSmurf}}>
      <div style={boxWithTabs}>{
        smurfs?(
          smurfs.map(smurf=>{
            return(

          <Alert color="primary" key={smurf.id} style={tab}>
         Name: {smurf.name} 
         <br />
          Age: {smurf.age} 
         <br />
          Height: {smurf.height} 
         <br />
         
          </Alert>


              )
          })
          )

        :

        (
      <Alert color="primary" >
      Name: Loading.... 
      <br />
      Age: Loading.... 
      <br />
      Height: Loading.... 
      <br />

      </Alert>
          )

      }</div>
      <AddSmurf/>
      </SmurfContext.Provider>
      </Container>

    );
}

export default Display;
