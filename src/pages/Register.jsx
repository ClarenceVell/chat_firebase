import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db, storage } from '../firebase';
import Add from '../assets/img/addAvatar.png' 
import { useState } from 'react';
import toast from 'react-hot-toast'

function Register() {
  const navigate = useNavigate()
  const [err, setErr] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    if(displayName && email && password && file){
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
  
        const storageRef = ref(storage, displayName);
  
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        uploadTask.on(
          (error) => {
            setErr(true)
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL
              })
  
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL : downloadURL
              })
  
              await setDoc(doc(db, "userChats", res.user.uid), {})
  
              navigate('/')
  
            });
          }
        );
  
      } catch (error) {
        setErr(true)
      }
    } else {
      toast.error('All the input must be filled!')
    }

  }

  return (
    <div className='formContainer'>

        <div className="formWrapper">
            <span className="logo">Whats Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file" id='file' hidden />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>Do you have an account? <Link to="/login">Login</Link></p>
        </div>

    </div>
  )
}

export default Register