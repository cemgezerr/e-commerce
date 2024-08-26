import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";



const ProductDetail = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const { id } = useParams();

    const { product, selectedProduct } = useSelector((store) => store.product)

    const dispatch = useDispatch();

    const { title, description, price, image } = selectedProduct;

    useEffect(() => {
        getProductsById()
    }, [])

    const getProductsById = () => {
        product.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }

    return (
        <div style={{ marginTop: "120px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <div style={{ marginRight: "30px" }}>
                <img src={image} width={300} height={500} />
            </div>
            <div >
                <h1>{title}</h1>
                <h3>{description}</h3>
                <h1 style={{ color: "red", fontSize: "50px", textAlign: "start", fontWeight: "bold" }}>{price}  ₺   </h1>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <CiCirclePlus onClick={increment} fontSize={40} style={{ marginRight: "5px" }} /> <span style={{ fontSize: "50px" }}>{count}</span> <CiCircleMinus onClick={decrement} fontSize={40} style={{ marginLeft: "5px" }} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <button style={{
                        border: "none", outline: "none", backgroundColor: "yellow", padding: "15px 30px", fontSize: "15px", borderRadius: "5px "
                    }}>Sepete Ekle</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail