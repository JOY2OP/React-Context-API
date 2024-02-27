import React, { useContext } from 'react'
import UserContext from '../context/UserContext';
    
const Profile = () => {
    const {user} = useContext(UserContext);     //Using useContext hook and extracting {user} from it

    if (!user) return (<h1>Not Logged In</h1>)
  return (
    <div>Profile: {user.username}</div>
  )
}

export default Profile;