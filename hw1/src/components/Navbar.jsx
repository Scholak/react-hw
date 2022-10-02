import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
	const navigate = useNavigate()
	const handleClick = e => {
		localStorage.removeItem('auth')
		navigate('/login')
	}

	return (
		<nav>
			{localStorage.getItem('auth')
				? localStorage.getItem('auth')
				: 'guest'}{' '}
			/
			{localStorage.getItem('auth') ? (
				<button onClick={handleClick}>logout</button>
			) : (
				''
			)}
		</nav>
	)
}

export default Navbar
