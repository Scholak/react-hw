import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../components/CartItem/CartItem'
import styles from './cart.module.css'

function Cart() {
	const carts = useSelector(state => state.carts.carts)

	return (
		<div className='container'>
			<h1 className='page-heading'>Sepet</h1>
			<div className={styles.cartList}>
				{carts?.map(cart => (
					<CartItem key={cart.id} {...cart} />
				))}
			</div>
		</div>
	)
}

export default Cart
