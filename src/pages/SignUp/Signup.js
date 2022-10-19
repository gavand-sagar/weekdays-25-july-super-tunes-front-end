import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const signup = () => {

        fetch(`http://localhost:3001/users/${username}/${password}`,
            {
                method: 'POST'
            }
        )
            .then(a => a.json())
            .then(response => {
                if (response.status == true) {
                    alert(response.message)
                    navigate('/login')
                } else {
                    alert(response.message)
                }
            })
    }


    return (
        <div className='login-container'>
            <div className='login-form'>
                <h1>Join us!</h1>
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
                    <button onClick={signup} className='login-button'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
