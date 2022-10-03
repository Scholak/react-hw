import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function NoteList() {
	const navigate = useNavigate()

	const user = window.localStorage.getItem('auth')
	const id = Date.now()

	const allNotes = JSON.parse(window.localStorage.getItem('notes')) || []
	const [notes, setNotes] = useState(
		allNotes.filter(note => note.user === user)
	)
	const [note, setNote] = useState({
		id,
		title: '',
		body: '',
		user,
	})

	const titleEl = useRef()
	const bodyEl = useRef()

	useEffect(() => {
		if (!window.localStorage.getItem('auth')) {
			navigate('/login')
		}
	}, [])

	const handleChange = e => {
		setNote(note => ({
			...note,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (note.title && note.body) {
			allNotes.push(note)
			window.localStorage.setItem('notes', JSON.stringify(allNotes))
			setNotes([...notes, note])
			titleEl.current.value = ''
			bodyEl.current.value = ''
			setNote({
				title: '',
				body: '',
				user,
			})
		}
	}

	const handleDelete = id => {
		const newNotes = notes.filter(note => note.id !== id)
		window.localStorage.setItem(
			'notes',
			JSON.stringify(allNotes.filter(note => note.id !== id))
		)
		setNotes(newNotes)
	}

	return (
		<main>
			<h1>Notes</h1>
			<form onSubmit={handleSubmit}>
				<input
					ref={titleEl}
					onChange={handleChange}
					type='text'
					name='title'
					placeholder='Note title...'
				/>
				<textarea
					ref={bodyEl}
					onChange={handleChange}
					name='body'
					rows='5'
					placeholder='Note body...'
				></textarea>
				<button>create</button>
			</form>
			<h2>Note List</h2>
			<div className='notes'>
				{notes &&
					notes.map(note => (
						<div key={note.id}>
							<h3>{note.title}</h3>
							<p>{note.body}</p>
							<button onClick={() => handleDelete(note.id)}>
								x
							</button>
						</div>
					))}
			</div>
		</main>
	)
}

export default NoteList
