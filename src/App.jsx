import { useState } from 'react'
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProviders from './context/UserContextProviders';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProviders>
      <h1>Using context API</h1>
      <Login />
      <Profile />
    </UserContextProviders>
  )
}

export default App;
