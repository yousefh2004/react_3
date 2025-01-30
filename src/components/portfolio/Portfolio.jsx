import React from 'react';
import useAxios from '../../hook/useAxios';
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    const { data, error, isLoading } = useAxios(`https://dummyjson.com/products/category-list`);

    if (isLoading) {
        return <Loading />;
    }

    return (
       <div className='hop'>
        <div className="conto">
            {error && <div className='alert alert-danger'>{error}</div>}
            <ul className="list-unstyled">
                {Array.isArray(data) && data.map((category, index) => (
                    <li key={index} >
                        <Link 
                            to={`/about/${category}`} 
                            className="text-decoration-none text-secondery"
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
}
