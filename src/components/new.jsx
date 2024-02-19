    import React from 'react'
    import { BrowserRouter,Route,Routes } from 'react-router-dom'
    import Home from './home'
    import Login from './login'
    import Signup from './signup'
    const New = () => {
    return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
    )
    }

    export default New