import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

function Navbar() {
	return (
		<nav>
			<h1>
				<Link to='/'>
					<span className={styles.first}>Fark</span>
					<span className={styles.second}>Sepeti</span>
				</Link>
			</h1>
			<ul>
				<li className={styles.link}>
					<Link to='/sepet'>sepet</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
