import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/ProfileUser.css'

const ProfileUse = () => {


    const [userLogin, setUserLogin] = useState({usrName:"Ali", password:"123", email: "ali@gmail.com"})

    const [user, setUser] = useState({usrName:"", password:"", email: ""})
    const [error, setError] = useState("")
    const [login, setLogin] = useState(false)

  
   
 
    const Login = data => {
        console.log(data)
        if(userLogin.usrName === data.usrName && userLogin.password === data.password && userLogin.email === data.email){
            alert('logged in')
            setLogin(true)
            setUser({
                usrName: data.usrName,
                password: data.password,
                email: data.email
            })
            localStorage.setItem('username', JSON.stringify(data.usrName))
    
    }else{
        // alert('details do not match')
        setError('details do not match')
    }
    }
    const handleSubmit = e => {
        
        e.preventDefault()
        Login(user)

    }


    return (
        <div>
            <Navbar/>
            

            { login ? <div>You Are Welcome</div> : <form onSubmit={handleSubmit}>

            <h3>Login</h3>
            {error}
            <label>User Name</label>
            <input 
            type="text"
            name="username"
            id="username"
            onChange={e => setUser({...user, usrName: e.target.value})}/>

            <label>Email</label>
            <input 
            type="email"
            name="email"
            id="email"
            onChange={e => setUser({...user, email: e.target.value})}/>

            <label>Password</label>
            <input 
            type="password"
            name="password"
            id="password"
            onChange={e => setUser({...user, password: e.target.value})}/>

            <input type="submit" className="submit"/>

            </form>}
        </div>
    )
}

export default ProfileUse
