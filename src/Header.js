import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SquareButton from './SquareButton'

export default function Header() {

    const navigate = useNavigate()

    const [username, setUsername] = useState(localStorage.getItem('username'))

    const logout = () => {

        const result = window.confirm("Are you sure?")

        if (result) {
            // if user say ok
            localStorage.setItem('IAmAuthenticated', 'false')
            navigate('/login')
        } else {
            // what if user say cancel
        }

    }

    return (
        <div className='app-header'>
            <div className="links-container">
                <h3>Welcome {username}</h3>
                <Link to='/faq'>
                    <span>FAQ</span>
                </Link>
                <Link to='/about'>
                    <span>About</span>
                </Link>
                <Link to='/recipe'>
                    <span>Recipe</span>
                </Link>
                <Link to='/table'>
                    <span>Recipe</span>
                </Link>
                <Link to='/zoom'>
                    <span>Zoom</span>
                </Link>
                <Link to='/cat-facts'>
                    <span>Cat Facts</span>
                </Link>
                <Link to='/users'>
                    <span>Users</span>
                </Link>
                <Link to='/posts'>
                    <span>Posts</span>
                </Link>

                <Link to='/questions'>
                    <span>Questions</span>
                </Link>

                <Link to='/ask-question'>
                    <span>Ask Question</span>
                </Link>

            </div>
            <div className='user-information'>
                <SquareButton onClick={logout} label='Logout' />
            </div>

        </div>
    )
}
