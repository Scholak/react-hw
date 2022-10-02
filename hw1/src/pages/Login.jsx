import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
	const inputEl = useRef()
	const navigate = useNavigate()
	const [error, setError] = useState()

	const handleSubmit = e => {
		e.preventDefault()
		if (inputEl.current.value === '') {
			setError('Please enter your username.')
		} else {
			setError('')
			window.localStorage.setItem('auth', inputEl.current.value)
			navigate('/')
		}
	}

	return (
		<main className='login'>
			<h1>Login</h1>
			<form onSubmit={handleSubmit} className='login-form'>
				{error && <span className='error'>{error}</span>}
				<input type='text' ref={inputEl} />
				<button>Login</button>
			</form>
		</main>
	)
}

export default Login
