import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		fetch('products.json')
			.then(res => res.json())
			.then(data => setProducts(data))
	}, [])
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
			{products.map(product => {
				return (
					<ProductCard product={product} key={product._id}></ProductCard>
				)
			})}
		</div>
	)
}

export default Home
