import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function useRouteProtector() {
    const navigate = useNavigate()

    useEffect(() => {
        let IAmAuthenticated = localStorage.getItem('IAmAuthenticated')

        if (IAmAuthenticated != 'true') {
            navigate('/login')
        }

    }, [])
}