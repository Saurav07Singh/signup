import React, { useState } from 'react'
import Welcome from './Welcome';

const SignUp = () => {
    const [userData,setUserData] = useState({
        username:"",
        email:"",
        password:""

    })

    const [show,setShow] = useState(false)
    function handleSubmit(e){
        e.preventDefault();
        console.log("Submitted",userData);
        setShow(true);
    }

    function handleChange(e){
        const {value,name} = e.target;
        setUserData(prev=>({
            ...prev,
            [name]:value
        }))
        console.log(userData)
    }
  return (
    <>
    <form className='formStyle' onSubmit={handleSubmit}>
        <div>
        <label htmlFor='username' >Username:</label>
        <input required type="text" id="username" value={userData.username} name="username" onChange={handleChange}/>
        </div>
        <div>
        <label htmlFor='email' >Email:</label>
        <input required type="email" id="email"  value={userData.email} name="email" onChange={handleChange}/>
        </div>
        
        <div>
        <label htmlFor='password' >Password:</label>
        <input required type="password" id="password" value={userData.password} name="password"onChange={handleChange}/>
        
        </div>
        <button>Sumbit</button>
    </form>
    {show && <Welcome userData={userData}/>}
    </>

  )
}

export default SignUp