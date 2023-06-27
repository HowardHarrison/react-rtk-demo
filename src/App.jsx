import { useState } from 'react'
import './App.css'
import { CakeView } from './features/cake/cakeView'
import { IcecreamView } from './features/icecream/icecreamView'
import { UserView } from './features/user/userView'

function App() {

  return (
    <div>
     <CakeView/>
     <IcecreamView/>
     <UserView/>  
    </div>
  )
}

export default App
