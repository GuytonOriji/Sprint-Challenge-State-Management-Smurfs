import React from 'react'
import {Navbar} from 'reactstrap'
import papaSmurf from '../img/papa-smurf.png'
 import {NavLink} from 'react-router-dom'

const navbar ={
	flex:"1",
	borderBottom:"solid",

}

const lilnavbar ={
	flex:"1",
	fontSize:"2rem",
	fontWeight:"bolder"

}


 const fig ={
	flex:".5",
	display:"flex",


}






class Header extends React.Component {

  render() {
    return (
      
      	<Navbar className="navbar"  style={navbar}>
      	<figure style={fig}>
      	<img src={papaSmurf} alt='smurf' width="100px" height="100px"/>
      	</figure>
      		<Navbar className="navbar" style={lilnavbar}>
      		<NavLink to='/'>Home</NavLink>
      		<NavLink to='/something'>ffef</NavLink> 
      		<NavLink to='addSmurf'>add Smurf</NavLink>
      	</Navbar>
      	</Navbar>
    );
  }
}

export default Header;
