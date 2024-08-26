import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    console.log(product);

    const { id, title, description, price, image } = product;

    const navigate = useNavigate()

    return (
        <div className='card'>
            <img className='image' src={image} alt='image' />
            <div>
                <p style={{ textAlign: "center", height: "60px" }}>{title}</p>
                <h3 style={{ textAlign: "center" }}>{price} ₺</h3>
            </div>
            <div className='flex-row'>
                <button onClick={() => navigate("/product-details/" + id)} className='detail-btn'>Detayına Git</button>
            </div>

        </div>
    )
}

export default Product