import React from 'react'

const CharComponent = props => {
  return (
    <div>
      <ol>
        <ul className='box'>
          {props.char}
        </ul>
      </ol>
    </div>
  )
}

export default CharComponent