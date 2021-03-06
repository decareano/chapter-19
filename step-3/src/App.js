import React, { useState } from 'react'
import './styles/_App.scss'
import Main from './components/Main/Main';
import UserContext, { loggedIn } from './components/UserContext'

fetch('./api')
  .then(res => res.text())
  .then(text => console.log(text))


function App() {
  
  const loginHook = useState(loggedIn)

  return (
    <UserContext.Provider value={loginHook}>
      <div className="App">
        <Main />
      </div>
    </UserContext.Provider>
  )
}

export default App
