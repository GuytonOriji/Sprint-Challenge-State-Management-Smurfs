import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/'
import {Switch,Route} from 'react-router-dom'
import Home from './center/display/'
import addSmurf from './center/form/'

const intro = {
  color:"azure",
  textShadow:"0 0 20px red",
  WebkitTextStroke:".5px blue",
  fontWeight:"bloder"
}

class App extends Component {

  render() {
    return (
      <div className="App">
      <Header />
        <div style={intro} className="intro">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        </div>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/addSmurf' component={addSmurf} />
        </Switch>
      </div>

    );
  }
}

export default App;
