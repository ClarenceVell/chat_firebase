import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Add from '../assets/img/addAvatar.png'
import { auth } from '../firebase'

function Login() {
  const navigate = useNavigate()
  const [err, setErr] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")

    } catch (error) {
      setErr(true)
    }

  }

  return (
    <div className='formContainer'>

        <div className="formWrapper">
            <span className="logo">Vells Chat</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>

                <button>Sign in</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>
              You don't have an account ?&nbsp;
              <span style={{cursor: 'pointer'}}>Register</span>
            </p>
        </div>

    </div>
  )
}

export default Login