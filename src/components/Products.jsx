import React from 'react'
import Navbar from './Navbar'
import ProductGrid from './ProductGrid'

export default function Products() {
  return (
    <>
    <Navbar />
      <div className="container">
        <h1 className="text-center mt-5 mb-4">Buy Gym Goodies</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ProductGrid />
          </div>
        </div>
      </div>
    </>
  )
}
