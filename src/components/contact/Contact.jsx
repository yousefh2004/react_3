import React, { useState } from 'react';

export default function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        brand: '',
        stock: '',
        weight: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New Product:', product);
        alert('Product submitted (this is a simulated submission)');
    };

    return (
        <div className='cont'>
            <h2>ADD NEW PRODUCT</h2>
            <div className='porto'>
                <div className="star">
                    <div className="left"></div>
                    <i className="fa-solid fa-star fa-2xl" style={{ color: "#780000" }}></i>
                    <div className="right"></div>
                </div>
            </div>
            <form method="post" className='link' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={product.name}
                    onChange={handleInputChange}
                    id='uno'
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Product Price"
                    value={product.price}
                    onChange={handleInputChange}
                    id='dos'
                />
                <textarea
                    name="description"
                    placeholder="Product Description"
                    value={product.description}
                    onChange={handleInputChange}
                    id="message"
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Product Category"
                    value={product.category}
                    onChange={handleInputChange}
                    id='tris'
                />
                <input
                    type="text"
                    name="brand"
                    placeholder="Product Brand"
                    value={product.brand}
                    onChange={handleInputChange}
                    id='quatro'
                />
                <input
                    type="number"
                    name="stock"
                    placeholder="Stock Quantity"
                    value={product.stock}
                    onChange={handleInputChange}
                    id='cinco'
                />
                <input
                    type="number"
                    name="weight"
                    placeholder="Product Weight (kg)"
                    value={product.weight}
                    onChange={handleInputChange}
                    id='seis'
                />
                <input type="submit" value="Add Product" className="sub" id='besh'/>
            </form>
        </div>
    );
}
