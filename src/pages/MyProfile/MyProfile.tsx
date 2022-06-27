import React from 'react'
import { useAuthContext } from '../../lib/context/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

export const MyProfile = () => {
    const {user} = useAuthContext();
    if( user === null ){
        return <Navigate to="/login" />
      }
  return (
    <div>
        MyProfile
    </div>
  )
}
