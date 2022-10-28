import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCart/ProductCard'
import styles from './products.module.css'

function Products() {
	const products = useSelector(state => state.products.products)

	return (
		<div className='container'>
			<h1 className='page-heading'>Ürünler</h1>
			<div className={styles.productList}>
				{products?.map(product => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</div>
	)
}

export default Products
