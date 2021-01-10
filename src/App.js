import React, { useState } from 'react'
import './App.css'
import CharComponent from './CharComponent/CharComponent'
import ValidationComponent from './ValidationComponent/ValidationComponent'

function App() {
  const [ inputState, setInputState ] = useState ( {
    value: ''
  } )

  const catchInputLength = eve => {
    setInputState({
      value: eve.target.value
    })
  }

  const inputLength =  (inputState.value.length >= 16) ? 'Long enough' : 'Too short text'

  if (inputLength === 'Long enough') {
    const charArr = (
      <div>
        { inputState.value.map(arr => <CharComponent char={ arr.split('') } /> )  }
      </div>
    )
    return charArr
  }

  return (
    <div className="App">
      <input className='User'
      placeholder='Type Any Text'
      type='text'
      maxLength='30'
      onChange={ catchInputLength } />
      <ValidationComponent textLength={ inputLength } value={ inputState.value } />
      {charArr}
    </div>
  );
}

export default App;