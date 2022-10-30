import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss"


function App() {

  const {currentUser} = useContext(AuthContext)

  console.log(currentUser)

  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const resize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  const ProtectedRoute = ({ children }) => {
    if(!currentUser){
      return <Navigate to='/login' />
    }

    return children
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={
            <ProtectedRoute>
              <Home width={dimension.width} />
            </ProtectedRoute>
          } />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
