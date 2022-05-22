
import React from 'react'
import { BrowserRouter, Link, } from 'react-router-dom'

function Auth () {
    return(
        <>
       
        New user &nbsp; &nbsp; &nbsp;
        <Link to='/register'>Register</Link> <br/> <br/>
        Existing user  &nbsp; &nbsp; &nbsp; 
        <Link to='/login'>Login</Link> <br/>  <br/>
        </>
    )
}

export default Auth;