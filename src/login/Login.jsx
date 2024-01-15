import React from 'react'
import LoginCard from './components/LoginCard'

function Login({ setAuthorized, email, setEmail }) {
  return (
    <div className='flex justify-center items-center h-screen'>
        <LoginCard email={email} setEmail={setEmail} setAuthorized={setAuthorized} />
    </div>
        
  )
}

export default Login