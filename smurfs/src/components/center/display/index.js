import React, { useState , useEffect,Component } from "react";
import styled from 'styled-components'
import axios from 'axios'
import SmurfContext from '../contexts/'
import AddSmurf from '../form/'
import { Alert , Container} from 'reactstrap';
import bg from '../../img/bg.jpg'









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



const addSmurfNameOnlyLetters = (e) =>{
         if(e.which > 64 && e.which < 91 || e.which === 8){
            return true
          }else{
            e.preventDefault()
          }
}

  const addSmurfName = (e) =>{

          if(e.target.value.match(/[A-z]/i))
      return setSmurfName(e.target.value)
  }






    const addSmurfAgeOnlyNumbers = (e) =>{

          if(e.which > 47 && e.which < 58 || e.which === 8){
            return true
          }else{
            e.preventDefault()
          }

  }

   const addSmurfAge = (e) =>{
        e.preventDefault()

          if(e.target.value.match(/[0-9]/i)){
            return true
          }

      return setSmurfAge(e.target.value)
  }







  const addSmurfHeightOnlyCMlengths = (e) =>{

          if(e.which > 47 && e.which < 58 &&
            e.which > 64 && e.which < 91
            || e.which === 8){
            return true
          }else{
            e.preventDefault()
          }
  }

    const addSmurfHeight = (e) =>{
       
  
      return setSmurfAge(e.target.value)
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
      <SmurfContext.Provider value={{smurfs,addSmurfName, addSmurfAgeOnlyNumbers,addSmurfAge,addSmurfHeight, addSmurf}}>
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
