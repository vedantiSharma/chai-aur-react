
import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile ()  {
    const {user} = useContext(UserContext)
 if (!user) 
    return <div>please LOGIN</div>
    
 
 return <div>Welcome vedanti</div>
}

export default Profile