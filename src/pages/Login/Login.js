import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const homepageUrl = '/about'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = () => {


        fetch(`http://localhost:3001/authenticate/${username}/${password}`)
            .then(a => a.json())
            .then(response => {
                //
                if (response.status == true) {
                    localStorage.setItem('IAmAuthenticated', 'true')
                    localStorage.setItem('username', username)

                    navigate(homepageUrl)
                } else {
                    localStorage.setItem('IAmAuthenticated', 'false')
                    alert("Invalid")
                }
            })
    }

    return (
        <div className='login-container'>
            <div className='login-form'>
                <h1>Log in!</h1>
                <div>
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className='username'
                        placeholder='Username' />

                </div>
                <div>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='password'
                        placeholder='Password' />
                </div>
                <div>
                    <button onClick={login} className='login-button'>Log In</button>
                </div>
                <div>
                    Don't Have an account?<br></br>
                    <Link to={'/signup'}>
                        Create one here!
                    </Link>
                </div>
            </div>
        </div>
    )
}
