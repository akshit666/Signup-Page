import React,{useState,} from 'react'
import './c.css'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("")
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        localStorage.setItem( "user", username);
        localStorage.setItem( "pass", password);
        alert("Account Created Successfully");
        navigate("/login")
    }
  return (
   <>
      <h1 style={{textAlign:"center"}}>Sign Up</h1> 
    <div className='main'>
      <form onSubmit={handleSubmit }>
        <label>
          Username:
          <input onChange={(e)=>setUsername(e.target.value)} type="text" name="username" required /> <br /><br />
        </label>
        <br />
        <label>
          Password:
          <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" required /> <br /><br />
        </label>
        <br />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
   </>
  )
}

export default Signup