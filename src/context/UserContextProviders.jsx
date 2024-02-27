import React, { useState } from 'react'
import UserContext from './UserContext';


//Its a wrapper for CONTEXT repo
const UserContextProviders = ({children}) => {
    const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProviders;