import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

function Login() {
  const navigate = useNavigate()
  const [err, setErr] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    if(email && password){
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
  
      } catch (error) {
        setErr(true)
      }
    } else{
      toast.error('All the input must be filled!')
    }


  }

  return (
    <div className='formContainer'>

        <div className="formWrapper">
            <span className="logo">Whats Chat</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>

                <button>Sign in</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>

    </div>
  )
}

export default Login