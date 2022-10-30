import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss"


function App() {

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

  // console.log({dimension})

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home width={dimension.width} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
