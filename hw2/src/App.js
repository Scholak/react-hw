import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

const Products = React.lazy(() => import('./pages/Products/Products'))
const Cart = React.lazy(() => import('./pages/Cart/Cart'))

function App() {
	return (
		<React.Suspense fallback='loading...'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Products />} />
					<Route path='/sepet' element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</React.Suspense>
	)
}

export default App
