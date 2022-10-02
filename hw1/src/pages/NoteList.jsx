import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function NoteList() {
	const navigate = useNavigate()

	const [notes, setNotes] = useState(
		window.localStorage.getItem('notes')
			? JSON.parse(window.localStorage.getItem('notes'))
			: []
	)
	const [note, setNote] = useState({})

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
			const newNotes = [...notes, note]
			window.localStorage.setItem('notes', JSON.stringify(newNotes))
			setNotes(newNotes)
			titleEl.current.value = ''
			bodyEl.current.value = ''
			setNote({})
		}
	}

	const handleDelete = title => {
		const newNotes = notes.filter(note => note.title != title)
		window.localStorage.setItem('notes', JSON.stringify(newNotes))
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
					notes.map((note, index) => (
						<div key={index}>
							<h3>{note.title}</h3>
							<p>{note.body}</p>
							<button onClick={() => handleDelete(note.title)}>
								x
							</button>
						</div>
					))}
			</div>
		</main>
	)
}

export default NoteList
