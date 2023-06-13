import React, { useState } from 'react'
import Navbar from './AdminNavbar'

export default function AddProducts() {
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      // You can access the entered values using the state variables
      console.log('Product Name:', productName);
      console.log('Product Image:', productImage);
      console.log('Product Description:', productDescription);
      console.log('Product Price:', productPrice);
      // Reset form fields
      setProductName('');
      setProductImage('');
      setProductDescription('');
      setProductPrice('');
    };
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      setProductImage(file);
    };
  return (
    <>
    <Navbar />
    <div className="container">
        <h2>Add Products</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
          <label htmlFor="productImage">Product Image</label>
            <div className="input-group mb-3">
              <input
                type="file"
                className="form-control"
                id="productImage"
                onChange={handleImageUpload}
                required
              />
              <label className="input-group-text" htmlFor="productImage">
                Upload
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Product Description</label>
            <textarea
              className="form-control"
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Product Price</label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
