import React, { useState , useEffect,Component } from "react";
import styled from 'styled-components'
import axios from 'axios'
import SmurfContext from '../contexts/'
import AddSmurf from '../form/'
import { Alert , Container} from 'reactstrap';
import bg from '../../img/bg.jpg'
import nerdSumrf from '../../img/brainy-smurf.png'









const tab ={
  width:"400px"
}

document.querySelector("#root").style=`
background-image:url(${bg})

`

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

//state is above and i will sare it using conext api

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
         }).catch(err=>{
          alert(`please fill it in at least halfway right: ${err}`)
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
        <img src={nerdSumrf} width='30px' height='30px' />Name: {smurf.name} 
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
