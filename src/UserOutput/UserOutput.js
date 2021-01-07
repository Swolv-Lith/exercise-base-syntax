import React from 'react'
import '../App.css'

const UserOutput = props => {
  return (
    <div className="User">
      <p>1# {props.name1}</p>
      <p>2# {props.name2}</p>
      <p>3# {props.name3}</p>
    </div>
  )
}

export default UserOutput