import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../slices/cartSlice'

import styles from './productCart.module.css'
import img from '../../assets/bilgisayarhpfs-001.webp'

function ProductCard({ id, name, price }) {
	const dispatch = useDispatch()

	const products = useSelector(state => state.products.products)

	const handleClick = id => {
		const product = products.filter(product => product.id === id)[0]
		dispatch(addToCart(product))
	}

	return (
		<div className={styles.productCard}>
			<div className={styles.imageWrapper}>
				<img src={img} alt='ürün resmi' />
			</div>
			<h4 className={styles.productName}>{name}</h4>
			<p className={styles.productPrice}>{price} TL</p>
			<button
				onClick={() => handleClick(id)}
				className={styles.addToCartBtn}
			>
				sepete ekle
			</button>
		</div>
	)
}

export default ProductCard
