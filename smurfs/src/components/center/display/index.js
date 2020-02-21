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




const [smurfName,setSmurfName] = useState('')
const [smurfAge,setSmurfAge] = useState(Number)
const [smurfHeight,setSmurfHeight] = useState('')
const [smurfs,setSmurfs] = useState([])

  useEffect(()=>{
        axios.get("http://localhost:3333/smurfs/").then(wtf=>{
          setSmurfs(wtf.data)
        })
    },[])





  const addSmurfName = (e) =>{
        e.preventDefault()

       setSmurfName(e.target.value)
  }

    const addSmurfAge = (e) =>{
        e.preventDefault()

        //  axios.post("http://localhost:3333/smurfs/").then(wtf=>{
        //   setSmurfs(wtf.data)
        // })
 setSmurfAge(e.target.value)
  }

    const addSmurfHeight = (e) =>{
        e.preventDefault()

        //  axios.post("http://localhost:3333/smurfs/").then(wtf=>{
        //   setSmurfs(wtf.data)
        // })

         setSmurfHeight(e.target.value)
  }

    const addSmurf = (e) =>{
        e.preventDefault()

         axios.post("http://localhost:3333/smurfs/",{
          name:smurfName,
          age:smurfAge,
          height:smurfHeight,
         }).then(ok=>{
          console.log("after post",ok.data)

          setSmurfs([...smurfs,ok.data])
         })

        console.log(e.target.children)
        console.log({
          name:smurfName,
          age:smurfAge,
          height:smurfHeight,
         })

  }

    return (
      <Container>
      <SmurfContext.Provider value={{smurfs,addSmurfName, addSmurfAge,addSmurfHeight, addSmurf}}>
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
