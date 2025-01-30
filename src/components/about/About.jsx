import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useAxios from '../../hook/useAxios';
import Loading from '../loading/Loading';

export default function About() {
    const { id } = useParams(); 
    const apiUrl = id 
        ? `https://dummyjson.com/products/category/${id}` 
        : `https://dummyjson.com/products?limit=10`;       
    
    const { data, error, isLoading } = useAxios(apiUrl);
    useEffect(() => {
        console.log("Fetched Data:", data);
    }, [data]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='hop'>
            <div className="cento">
                {error && <div className='alert alert-danger'>{error}</div>}

                <div className="product-list">
                    {Array.isArray(data?.products) ? (
                        data.products.slice(0, 10).map((product) => (
                            <div key={product.id} className="product-card">
                                <img 
                                    src={product.thumbnail} 
                                    alt={product.title} 
                                    className="product-image"
                                />
                                <h3>{product.title}</h3>
                                <Link 
                                     to={`/product/${product.id}`} 
                                    className="text-decoration-none text-secondary"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
