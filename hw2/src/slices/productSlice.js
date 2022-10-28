import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	products: require('../data/products.json'),
}

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
})

export default productSlice.reducer
