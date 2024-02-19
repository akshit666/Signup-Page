import React from 'react'
import "./c.css"
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate();
    function logout(){
        // e.preventdefault();
        localStorage.removeItem("user")
        localStorage.removeItem("pass")
        navigate("/")
    }
  return (
    <>
    <h3 >This is your home Page</h3>
    <h1>Welcome You are logged in</h1>
    <button onClick={logout} className='btn'>Log Out</button>
    </>
  )
}

export default Home