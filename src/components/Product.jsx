import React from 'react'
import '../css/Product.css'

const Product = ({ product }) => {
    console.log(product);

    const { id, title, description, price, image } = product;

    return (
        <div className='card'>
            <img className='image' src={image} alt='image' />
            <div>
                <p style={{ textAlign: "center", height: "60px" }}>{title}</p>
                <h3 style={{ textAlign: "center" }}>{price} ₺</h3>
            </div>
            <div className='flex-row'>
                <button className='detail-btn'>Detayına Git</button>
            </div>

        </div>
    )
}

export default Product