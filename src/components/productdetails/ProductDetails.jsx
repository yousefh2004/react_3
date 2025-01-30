import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../../hook/useAxios';
import Loading from '../loading/Loading';

export default function ProductDetails() {
    const { id } = useParams(); 
    const { data: product, error, isLoading } = useAxios(`https://dummyjson.com/products/${id}`);
    
    const [selectedImage, setSelectedImage] = useState(product?.images[0] || ""); 
    useEffect(() => {
        if (product) {
            setSelectedImage(product.images[0]); 
        }
    }, [product]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="product-details">
            {error && <div className='alert alert-danger'>{error}</div>}
            {product ? (
                <div className="preduct-card">
                    
                    <div className='dad'>
                    <div className="product-image-gallery">
                        <img 
                            src={selectedImage} 
                            alt={product.title} 
                            className="product-image-large"
                        />
                        <div className="image-thumbnails">
                            {product.images.map((image, index) => (
                                <img 
                                    key={index} 
                                    src={image} 
                                    alt={`${product.title} image ${index + 1}`} 
                                    className="product-image-thumbnail"
                                    onClick={() => setSelectedImage(image)} // Change image on click
                                />
                            ))}
                        </div>
                    </div>

                   
                    <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <h3>Price: ${product.price}</h3>
                    {product.discountPercentage && <p>Discount: {product.discountPercentage}% off</p>}
                    <h4>Rating: {product.rating} / 5</h4>
                    
                    <p>In Stock: {product.stock} items</p>
                    <h5>Brand: {product.brand}</h5>
                    <p>SKU: {product.sku}</p>
                    <p>Weight: {product.weight} grams</p>
                    </div>
                    
                    <h5>Dimensions (cm):</h5>
                    <ul>
                        <li>Width: {product.dimensions.width} cm</li>
                        <li>Height: {product.dimensions.height} cm</li>
                        <li>Depth: {product.dimensions.depth} cm</li>
                    </ul>

                    
                    <p>Warranty: {product.warrantyInformation}</p>
                    <p>Shipping Information: {product.shippingInformation}</p>
                    <p>Status: {product.availabilityStatus}</p>
                    <p>Return Policy: {product.returnPolicy}</p>
                    <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>
                    
                    
                    </div>
                    <h5>Tags:</h5>
                    <ul>
                        {product.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>

                   
                    <h5>Reviews:</h5>
                    {product.reviews.length > 0 ? (
                        <ul className='rev'>
                            {product.reviews.map((review, index) => (
                                <li key={index}>
                                    <strong>{review.reviewerName}:</strong> 
                                    <span>Rating: {review.rating} / 5</span>
                                    <p>{review.comment}</p>
                                    <p><small>{new Date(review.date).toLocaleDateString()}</small></p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No reviews available.</p>
                    )}

                    
                    {product.meta.qrCode && (
                        <div>
                            <h5>QR Code:</h5>
                            <img src={product.meta.qrCode} alt="QR Code" className='rov'/>
                        </div>
                    )}
                    
                </div>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
}
