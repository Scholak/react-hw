import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './app.css'

const NoteList = React.lazy(() => import('./pages/NoteList'))
const Login = React.lazy(() => import('./pages/Login'))

function App() {
	return (
		<React.Suspense fallback={<span>Loading...</span>}>
			<Navbar />
			<Routes>
				<Route path='/' element={<NoteList />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</React.Suspense>
	)
}

export default App
