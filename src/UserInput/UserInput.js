import React from 'react'
import '../App.css'

const UserInput = props => {
  const style = {
    backgroundColor: '#981961',
    color: 'white',
    fontWeight: '700',
    width: '60%',
    margin: '16px auto',
    border: '3px solid #000',
    boxShadow: '0 2px 3px #ccc',
    padding: '16px',
    textAlign: 'center'
  }
  return (
    <div style={style}>
      <label>Username: </label>
      <input id="input" type="text" onChange={props.changed} value={props.value}/>
    </div>
  )
}

export default UserInput