import React from 'react'
import {Navbar} from 'reactstrap'
import papaSmurf from '../img/papa-smurf.png'
import brainySmurf from '../img/brainy-smurf.png'
 import {NavLink} from 'react-router-dom'

const navbar ={
	flex:"1",
	borderBottom:"solid",
  backgroundColor:"rgba(250,250,250,.5)"

}

const lilnavbar ={
	flex:"1",
	fontSize:"2rem",
	fontWeight:"bolder",
   display:'flex',
  justifyContent:'flex-end',
  alignItems:"center",
}


 const fig ={



}






class Header extends React.Component {

  render() {
    return (
      
      	<Navbar className="navbar"  style={navbar}>
      	<figure style={fig}>
      	<img src={papaSmurf} alt='smurf' width="100px" height="100px"/>
      	</figure>
      	<figure style={fig}>
        <img src={brainySmurf} alt='smurf' width="100px" height="100px"/>
        </figure>
      	</Navbar>
    );
  }
}

export default Header;
