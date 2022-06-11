import React, { useState } from 'react'
import userContext from './userContext';


const UserState=(props)=>{
     const [admin,setadmin] = useState(false);

     const logOut=()=>{
        localStorage.removeItem('token');
       
        }

     const isadmin = (isThere) =>{
         if(isThere)
         {
            setadmin(true);
         }
     }
    
  return (
      <userContext.Provider value={{admin,setadmin,isadmin,logOut}}>
          {props.children}
      </userContext.Provider>
  )
  }

export default UserState;