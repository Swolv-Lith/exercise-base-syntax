import React, { useState } from 'react'
import './App.css'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

function App() {
  /**
 * state = {
 * username: 'NTZ Marshall'
 * }
 * 
 * usrNmChangedHandler = eve => { this.setState({ username: eve.target.value }) }
 */
  const [ usrNmState, setUsrNmState ] = useState({
    usrNmes: [
      { name: 'Max'},
      { name: 'Josh'}
    ]
  })
  
  const nameChangeHandler = (event) => {
    setUsrNmState( {
      usrNmes: [
        { name: 'Max'},
        { name: event.target.value}
      ]
    } )
  }
  return (
    <div className="App">
      <UserInput changed={nameChangeHandler}/>
      <UserOutput 
      name1={usrNmState.usrNmes[0].name} 
      name2={usrNmState.usrNmes[1].name}
      name3='Margareth'
      />    
    </div>
  );
}

export default App;