import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../slices/cartSlice'

import styles from './cartItem.module.css'
import img from '../../assets/bilgisayarhpfs-001.webp'

function CartItem({ id, name, price }) {
	const dispatch = useDispatch()

	const handleRemove = id => {
		dispatch(removeFromCart(id))
	}

	return (
		<div className={styles.cart}>
			<div className={styles.imageWrapper}>
				<img src={img} alt='ürün resmi' />
			</div>
			<h4 className={styles.cartName}>{name}</h4>
			<p className={styles.cartPrice}>{price} TL</p>
			<button
				onClick={() => handleRemove(id)}
				className={styles.removeFromCartBtn}
			>
				kaldır
			</button>
		</div>
	)
}

export default CartItem
