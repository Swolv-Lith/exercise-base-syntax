import React from 'react'

const ValidationComponent = props => {
  return (
    <div>
      <span>
        {props.value}
      </span>
      <br/>
      <span>
        {props.textLength}
      </span>
    </div>
  )
}

export default ValidationComponent