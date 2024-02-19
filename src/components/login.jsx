import React,{useState} from 'react'
import "./c.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[username,setUsername]=useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();

        const storedUsername = localStorage.getItem("user");
        const storedPassword = localStorage.getItem("pass");
    
        if (username === storedUsername && password === storedPassword) {
          navigate("/home");
        } else {
          alert("Invalid username or password");
        }
    }
  return (
    <>
    <h1 style={{textAlign:"center"}}>Login</h1> 
  <div className='loginContainer'>
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login </button>
    </form>
  </div>
 </>
  )
}

export default Login